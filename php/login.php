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
		if(strlen($row["username"])>1)
		{			
			$_SESSION['userID']=$row["username"];
		}	
		if (strlen($row["email"])>1) {
			$_SESSION['email']=$row["email"];
		}
		if (strlen($row["address"])>1) {
			$_SESSION['address']=$row["address"];
		}
		if (strlen($row["phoneno"])>1) {
			$_SESSION['phoneno']=$row["phoneno"];
		}
		$json[] = $row;	
	}
	//sending a JSON response to the client
		if(isset($_SESSION['username']))
		{
			$_SESSION['loginstatus']=true;
		//	echo "SUCCESS";
		}
	 echo json_encode($json);
	mysql_close($conn);
}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>