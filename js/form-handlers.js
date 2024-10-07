import { getPasswordStrength, updatePasswordStrengthMeter } from "./utils.js";

export function handleRegistrationForm() {
  const registrationForm = document.getElementById("registration-form");
  if (registrationForm) {
    const passwordInput = document.getElementById("password");
    const passwordStrength = document.getElementById("password-strength");

    passwordInput.addEventListener("input", () => {
      const password = passwordInput.value;
      const strength = getPasswordStrength(password);
      updatePasswordStrengthMeter(strength, passwordStrength);
    });

    registrationForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (!name || !address || !phone || !email || !username || !password) {
        alert("All fields are required.");
        return;
      }

      if (username.includes("@") || /\d/.test(username)) {
        alert("Username must not contain numbers or special characters.");
        return;
      }

      const passwordPattern =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$#?])[A-Za-z\d@$#?]{6,10}$/;
      if (!passwordPattern.test(password)) {
        alert(
          "Password must be 6-10 characters long and include a mix of letters, numbers, and special characters (@, $, #, ?)."
        );
        return;
      }

      // Check if user already exists
      try {
        const response = await fetch('../backend/check_user.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`,
        });

        const result = await response.text();
        if (result === 'User already exists') {
          alert("User already exists with this email or username. Please try again.");
          return;
        }

        registrationForm.submit();
        alert("Registration successful!");
      } catch (error) {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
      }
    });
  }
}

export function handleLoginForm() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (!username || !password) {
        alert("Both username and password are required.");
        return;
      }

      // Create an AJAX request
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "../backend/login.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      // Handle the response from the server
      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.status === 'success') {
            alert(response.message);
            window.location.href = '../html/add-car.html';
          } else {
            alert(response.message);
          }
        } else {
          console.error("Error fetching data");
        }
      };

      // Send the request with form data
      xhr.send(`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
    });
  }
}

export function handleAddCarForm() {
  const addCarForm = document.getElementById("add-car-form");
  if (addCarForm) {
    addCarForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const make = document.getElementById("make").value;
      const model = document.getElementById("model").value;
      const year = document.getElementById("year").value;
      const milage = document.getElementById("milage").value;
      const location = document.getElementById("location").value;
      const price = document.getElementById("price").value;

      if (!make || !model || !year || !milage || !location || !price) {
        alert("All fields are required.");
        return;
      }

      addCarForm.submit();
      alert("Car added successfully!");
    });
  }
}

let isEventListenerAttached = false; // Flag to prevent attaching multiple event listeners

export function handleSearch() {
    const searchForm = document.getElementById("search-form");
    const searchResults = document.getElementById("search-results");

    if (searchForm && !isEventListenerAttached) {
        console.log("Attaching event listener to search form"); //debugging
        searchForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            console.log("Form submitted"); //debugging

            const model = document.getElementById("model").value;
            const location = document.getElementById("location").value;

            if (!model && !location) {
                alert("At least one of model or location is required.");
                return;
            }

            // Create an AJAX request
            var xhr = new XMLHttpRequest();
            xhr.open(
                "GET",
                `../backend/search.php?model=${encodeURIComponent(
                    model
                )}&location=${encodeURIComponent(location)}`,
                true
            );

            // Handle the response from the server
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Parse the JSON response
                    var results = JSON.parse(xhr.responseText);
                    var output = "";

                    if (Array.isArray(results) && results.length > 0) {
                        // Loop through results and create HTML to display the cars
                        results.forEach(function (car) {
                            output += '<div class="car">';
                            output +=
                                "<h3>" +
                                car.make +
                                " " +
                                car.model +
                                " (" +
                                car.year +
                                ")</h3>";
                            output += "<p>Milage: " + car.milage + " km</p>";
                            output += "<p>Location: " + car.location + "</p>";
                            output += "<p>Price: $" + car.price + "</p>";
                            output += "</div>";
                        });
                    } else {
                        // Handle no results or error message
                        output = "<p>" + (results.message || "No results found.") + "</p>";
                    }

                    // Insert the output into the search-results div
                    searchResults.innerHTML = output;
                } else {
                    console.error("Error fetching data");
                }
            };

            // Send the request with query parameters
            xhr.send();
        });

        isEventListenerAttached = true;
    }
}
