<?php
session_start();

if(!isset($_SESSION['cart']))
{
	echo false;
}
else
{
	$cart=$_SESSION['cart'];
	$cartArray = explode(",", $cart);	
	echo true;
	if(count($cartArray)>0)
		echo true;
	else
		echo false;
}
?>