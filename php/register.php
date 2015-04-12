<?php
//including the connection file
include "connect.php";

//validating whether the post value is set and not null
try{
	session_start();
	$_SESSION["loginstatus"]=false;
$username = $_POST["Username"];
$password = $_POST["Pwd"];
$name = $_POST["Name"];
$email = $_POST["Email"];
$phoneno = $_POST["PhoneNo"];
$address = $_POST["Address"];

	//querying the database
	$query = "insert into user VALUES (" . $username . "," . $name . "," . $email . "," . $password . "," . $address . "," . $phoneno . ")";
	$result = mysql_query($query) or die(error_get_last());
	if (query($sql) === TRUE) {
	echo "New record created successfully";
	}
	else
	{
		echo "Error";
	}
	mysql_close($conn);
}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>