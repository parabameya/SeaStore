<?php
//including the connection file
include "connect.php";



//validating whether the post value is set and not null
try{
	session_start();
	if(isset($_SESSION['admin']))
		echo true;
	else
		echo false;
}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>