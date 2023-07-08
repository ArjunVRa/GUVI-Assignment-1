<?php
// Connect to the MySQL server
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user profile information from the database
$sql = "SELECT * FROM test WHERE id = "$name"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $profileData = array(
        'name' => $row['name'],
        'email' => $row['email'],
        'address' => $row['address'],
        'dob' => $row['dob'],
        'phone' => $row['phone']
    );

    // Convert the data to JSON format
    $jsonResponse = json_encode($profileData);
    echo $jsonResponse;
} else {
    echo "No user found";
}

$conn->close();
?>
