<?php
//including the connection file
include "connect.php";
//validating whether the post value is set and not null
try{
	session_start();
	$username = $_SESSION["userID"];
	$products = $_SESSION['cart'];
	$cartArray = explode(",", $products);
	//querying the database
	$json = array();
	for ($x = 0; $x < count($cartArray); $x++) 
	{
		$query = "select product_id, producttitle, productprice from products where product_id = " . $cartArray[$x] ;
		$result = mysql_query($query) or die(error_get_last());
		//creating a JSON array
		
	
	//iterating through the each record and storing it in array
		while($row = mysql_fetch_array($result))
		{
			$json[] = $row;
		}
		unset($query);
		unset($result);
	}
	//sending a JSON response to the client
	echo json_encode($json);
	mysql_close($conn);
}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>