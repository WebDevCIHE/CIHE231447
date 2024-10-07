<?php
include 'db_connect.php'; // Include database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get POST data from form
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Securely hash the password
    
    // Check if user already exists (Testing Before JS AJAX implementation was used on register using check_user.php, leaving as is)
    $checkStmt = $conn->prepare("SELECT * FROM sellers WHERE email = ? OR username = ?");
    $checkStmt->bind_param("ss", $email, $username);
    $checkStmt->execute();
    $result = $checkStmt->get_result();

    if ($result->num_rows > 0) {
        echo "User already exists with this email or username.";
    } else {
        // Prepare and execute SQL statement to insert data into sellers table
        $stmt = $conn->prepare("INSERT INTO sellers (name, address, phone, email, username, password) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $name, $address, $phone, $email, $username, $password);

        if ($stmt->execute()) {
            echo "Registration successful!";
            // Redirect to login page or a success page
            header('Location: ../html/login.html');
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close connection
        $stmt->close();
    }
    // Close connection
    $checkStmt->close();
    $conn->close();
}
?>
