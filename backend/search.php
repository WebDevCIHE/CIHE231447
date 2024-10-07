<?php
// Establish database connection
$servername = "localhost";
$username = "root"; // Change if necessary
$password = ""; // Change if necessary
$dbname = "car_sales_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get search parameters from the AJAX request
$model = isset($_GET['model']) ? $_GET['model'] : '';
$location = isset($_GET['location']) ? $_GET['location'] : '';

// Prepare the SQL query
$sql = "SELECT * FROM cars WHERE 1=1"; // 1=1 is a trick to simplify adding dynamic conditions

// Add conditions if the fields are not empty
if (!empty($model)) {
    $sql .= " AND model LIKE '%" . $conn->real_escape_string($model) . "%'";
}
if (!empty($location)) {
    $sql .= " AND location LIKE '%" . $conn->real_escape_string($location) . "%'";
}

$result = $conn->query($sql);

// Prepare response array
$response = array();

if ($result->num_rows > 0) {
    // Fetch each result row as an associative array
    while ($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
} else {
    $response['message'] = "No cars found matching your criteria.";
}

// Output the response as JSON
echo json_encode($response);

// Close the database connection
$conn->close();
?>
