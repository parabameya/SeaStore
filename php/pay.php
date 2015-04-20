<?php
//including the connection file
include "connect.php";
session_start();
//validating whether the post value is set and not null
try{
	$products = $_SESSION['cart'];
	$username = $_SESSION['userID'];
	$date=date("m/d/Y");
	//querying the database
	$cartArray = explode(",", $products);
	$quantity=1;
	echo $username;

	for ($x = 0; $x < count($cartArray); $x++) 
	{
		$purchaseID=rand();
		$query = "insert into purchase VALUES (" . $username . "," . $cartArray[0] . "," . $quantity .  "," . $purchaseID . ", CURDATE())";
		$result = mysql_query($query) or die(error_get_last());
	
		unset($purchaseID);
		unset($query);
		unset($result);		
	}
	unset($_SESSION['cart']);	
	unset($_SESSION['cart-price']);		
	mysql_close($conn);
}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>