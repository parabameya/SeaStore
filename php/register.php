<?php
//including the connection file
include "connect.php";

//validating whether the post value is set and not null
try{
	$username = $_POST["User"];
	$password = $_POST["Paswd"];
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$phoneno = $_POST["PhoneNo"];
	$address = $_POST["Address"];
	$usertype= "NULL";

	//querying the database
	$query = "insert into user VALUES (" . $username . "," . $name . "," . $email . "," . $password . "," . $address . "," . $phoneno . "," . $usertype . ")";
	$result = mysql_query($query) or die(error_get_last());
	
	echo "New record created successfully";
	
	mysql_close($conn);
}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>