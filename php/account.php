<?php
//including the connection file
include "connect.php";



//validating whether the post value is set and not null
try{
	session_start();
$username = $_SESSION["username"];
	//querying the database
	$query = "select date, purchase_id, producttitle, quantity, productprice from purchase , products where username = " . $username . " and purchase.product_id = products.product_id ";

	$result = mysql_query($query) or die(error_get_last());
	//creating a JSON array
	$json = array();
	
	//iterating through the each record and storing it in array
	while($row = mysql_fetch_array($result))
	{
		$json[] = $row;	
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