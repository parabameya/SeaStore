<?php
//including the connection file
include "connect.php";

//validating whether the post value is set and not null
try{
	$products = $_SESSION['cart'];
	
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