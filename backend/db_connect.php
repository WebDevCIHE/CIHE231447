<?php
$host = 'localhost';
$db = 'car_sales_db'; // Change this to your database name
$user = 'root'; // Default MySQL user in XAMPP
$pass = ''; // Default MySQL password in XAMPP (usually empty)

$conn = new mysqli($host, $user, $pass, $db);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
