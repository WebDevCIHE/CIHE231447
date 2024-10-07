<?php

session_start(); // Start the session

// Check if seller_id is in the session
if (!isset($_SESSION['seller_id'])) {
    die("Error: Seller must be logged in to add a car.");
}

$seller_id = $_SESSION['seller_id']; // Retrieve the seller_id from the session

include 'db_connect.php'; // Include database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get POST data from form
    $make = $_POST['make'];
    $model = $_POST['model'];
    $year = $_POST['year'];
    $milage = $_POST['milage'];
    $location = $_POST['location'];
    $price = $_POST['price'];

    // Assuming the seller is logged in and the session contains the seller's ID
    session_start();
    $seller_id = $_SESSION['seller_id']; // Ensure the seller_id is set when the seller logs in

    // Prepare SQL statement to insert the car data into the cars table
    $stmt = $conn->prepare("INSERT INTO cars (seller_id, make, model, year, milage, location, price) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("isssisi", $seller_id, $make, $model, $year, $milage, $location, $price);

    if ($stmt->execute()) {
        echo "Car added successfully!";
        // Redirect to a success page or the car listing page
        header('Location: ../html/search.html');
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close connection
    $stmt->close();
    $conn->close();
}
?>
