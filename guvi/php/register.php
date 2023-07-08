<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$dob = $_POST['dob'];
$phone = $_POST['phone'];
$password = $_POST['password'];

// Connect to the MySQL server
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert the form data into the MySQL table
$sql = "INSERT INTO test (name, email, address, dob, phone, password)
        VALUES ('$name', '$email', '$address', '$dob', '$phone', '$password')";

if ($conn->query($sql) === TRUE) {
    // Redirect the user to the login page
    echo "<script>window.location.href = 'login.html';</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
