<?php
// connect to the database
include "connect.php";

// get results from database
try{
	session_start();
	$result = mysql_query("SELECT * FROM products") 
		or die(mysql_error());  
		
	// display data in table
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

