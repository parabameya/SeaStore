<?php
//including the connection file
include "connect.php";

//validating whether the post value is set and not null
try{
	session_start();
	
$username = $_POST["Username"];
$password = $_POST["Pwd"];

	//querying the database
	$query = "select * from user where username = " . $username . " and password = " . $password;
	$result = mysql_query($query) or die(error_get_last());
	//creating a JSON array
	$json = array();
	
	//iterating through the each record and storing it in array
	while($row = mysql_fetch_array($result))
	{
		if(strlen($row["name"])>1)
		{			
			$_SESSION['username']=$row["name"];
		}
		elseif (strlen($row["email"])>1) {
			$_SESSION['email']=$row["email"];
		}
		elseif (strlen($row["address"])>1) {
			$_SESSION['address']=$row["address"];
		}
		elseif (strlen($row["phoneno"])>1) {
			$_SESSION['phoneno']=$row["phoneno"];
		}
		else
		{}
		$json[] = $row;	
	}
	//sending a JSON response to the client
		if(isset($_SESSION['username']))
		{
			$_SESSION['loginstatus']=true;
			$url ='http://localhost:8080/SeaStoreGit/index.html';
		}
		else
		{
			$url ='http://localhost:8080/SeaStoreGit/login.html';
		}
	echo json_encode($json);
	mysql_close($conn);
		header( "Location: $url" );

}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>