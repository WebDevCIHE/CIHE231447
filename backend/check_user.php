<?php
include 'db_connect.php'; // Include database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $username = $_POST['username'];

    // Check if user already exists
    $checkStmt = $conn->prepare("SELECT * FROM sellers WHERE email = ? OR username = ?");
    $checkStmt->bind_param("ss", $email, $username);
    $checkStmt->execute();
    $result = $checkStmt->get_result();

    if ($result->num_rows > 0) {
        echo "User already exists";
    } else {
        echo "User does not exist";
    }

    // Close connection
    $checkStmt->close();
    $conn->close();
}
?>