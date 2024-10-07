// This code has been refactored using AI + Manual Checking was done to insure everything is still present.

// document.addEventListener("DOMContentLoaded", () => {
//   const forms = document.querySelectorAll("form");

//   forms.forEach((form) => {
//     form.addEventListener("focusin", (event) => {
//       if (event.target.tagName === "INPUT") {
//         event.target.style.backgroundColor = "yellow";
//       }
//     });

//     form.addEventListener("focusout", (event) => {
//       if (event.target.tagName === "INPUT") {
//         event.target.style.backgroundColor = "white";
//       }
//     });
//   });

//   const buttons = document.querySelectorAll("button");

//   buttons.forEach((button) => {
//     button.addEventListener("mouseover", () => {
//       button.style.backgroundColor = "lightblue";
//     });

//     button.addEventListener("mouseout", () => {
//       button.style.backgroundColor = "";
//     });
//   });

//   const registrationForm = document.getElementById("registration-form");
//   if (registrationForm) {
//     const passwordInput = document.getElementById("password");
//     const passwordStrength = document.getElementById("password-strength");

//     passwordInput.addEventListener("input", () => {
//       const password = passwordInput.value;
//       const strength = getPasswordStrength(password);
//       console.log("Password strength:", strength); // Debugging Log
//       updatePasswordStrengthMeter(strength, passwordStrength);
//     });

//     registrationForm.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const name = document.getElementById("name").value;
//       const address = document.getElementById("address").value;
//       const phone = document.getElementById("phone").value;
//       const email = document.getElementById("email").value;
//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;

//       if (!name || !address || !phone || !email || !username || !password) {
//         alert("All fields are required.");
//         return;
//       }

//       if (username.includes("@") || /\d/.test(username)) {
//         alert("Username must not contain numbers or special characters.");
//         return;
//       }

//       const passwordPattern =
//         /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$#?])[A-Za-z\d@$#?]{6,10}$/;
//       if (!passwordPattern.test(password)) {
//         alert(
//           "Password must be 6-10 characters long and include a mix of letters, numbers, and special characters (@, $, #, ?)."
//         );
//         return;
//       }

//       registrationForm.submit();
//     });
//   }

//   function getPasswordStrength(password) {
//     let strength = 0;
//     if (password.length >= 6) strength = 33;
//     if (password.length >= 8) strength = 66;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[a-z]/.test(password)) strength++;
//     if (/\d/.test(password)) strength++;
//     if (/[@$#?]/.test(password)) strength += 10;
//     return strength;
//   }

//   function updatePasswordStrengthMeter(strength) {
//     const strengthMeter =
//       document.getElementById("password-strength").firstElementChild;
//     strengthMeter.style.width = strength + "%";

//     if (strength < 50) {
//       strengthMeter.className = "strength-weak";
//     } else if (strength < 75) {
//       strengthMeter.className = "strength-medium";
//     } else {
//       strengthMeter.className = "strength-strong";
//     }
//   }

//   const loginForm = document.getElementById("login-form");
//   if (loginForm) {
//     loginForm.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;

//       if (!username || !password) {
//         alert("Both username and password are required.");
//         return;
//       }

//       loginForm.submit();
//     });
//   }

//   const addCarForm = document.getElementById("add-car-form");
//   if (addCarForm) {
//     addCarForm.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const make = document.getElementById("make").value;
//       const model = document.getElementById("model").value;
//       const year = document.getElementById("year").value;
//       const milage = document.getElementById("milage").value;
//       const location = document.getElementById("location").value;
//       const price = document.getElementById("price").value;

//       if (!make || !model || !year || !milage || !location || !price) {
//         alert("All fields are required.");
//         return;
//       }

//       addCarForm.submit();
//     });
//   }

//   document
//   .getElementById("search-form")
//   .addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the default form submission

//     // Get the form input values
//     var model = document.getElementById("model").value;
//     var location = document.getElementById("location").value;

//     // Create an AJAX request
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", `../backend/search.php?model=${encodeURIComponent(model)}&location=${encodeURIComponent(location)}`, true);

//     // Handle the response from the server
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         // Parse the JSON response
//         var results = JSON.parse(xhr.responseText);
//         var output = "";

//         if (Array.isArray(results) && results.length > 0) {
//           // Loop through results and create HTML to display the cars
//           results.forEach(function (car) {
//             output += '<div class="car">';
//             output +=
//               "<h3>" +
//               car.make +
//               " " +
//               car.model +
//               " (" +
//               car.year +
//               ")</h3>";
//             output += "<p>Milage: " + car.milage + " km</p>";
//             output += "<p>Location: " + car.location + "</p>";
//             output += "<p>Price: $" + car.price + "</p>";
//             output += "</div>";
//           });
//         } else {
//           // Handle no results or error message
//           output = "<p>" + (results.message || "No results found.") + "</p>";
//         }

//         // Insert the output into the search-results div
//         document.getElementById("search-results").innerHTML = output;
//       } else {
//         console.error("Error fetching data");
//       }
//     };

//     // Send the request with query parameters
//     xhr.send();
//   });
// });
