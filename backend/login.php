<?php
include 'db_connect.php'; // Include database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get POST data from form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare SQL statement to get the hashed password from the sellers table
    $stmt = $conn->prepare("SELECT password, seller_id FROM sellers WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    // Check if username exists
    if ($stmt->num_rows > 0) {
        // Bind the result
        $stmt->bind_result($hash, $seller_id);
        $stmt->fetch();

        // Verify the password
        if (password_verify($password, $hash)) {
            // Start a session and redirect to the seller dashboard
            session_start();
            $_SESSION['username'] = $username;
            $_SESSION['seller_id'] = $seller_id;
            echo json_encode(['status' => 'success', 'message' => 'Login successful!']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid password!']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No seller found with this username!']);
    }

    // Close connection
    $stmt->close();
    $conn->close();
}
?>