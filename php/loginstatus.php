<?php
session_start();

if(!isset($_SESSION['loginstatus']))
{
	$_SESSION['loginstatus']=false;
	echo false;
}
else
{
$status=$_SESSION['loginstatus'];
	if($status)
		echo true;
	else
		echo false;
}
?>