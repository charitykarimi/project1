<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "mydatabase";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

echo "Connected Successfully";
?>