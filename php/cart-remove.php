<?php
//including the connection file
include "connect.php";

//validating whether the post value is set and not null
try{
	session_start();
	$prodID = $_POST["ProdID"];
	
	$index = $_POST["Index"];
	$index = str_replace("'", "", $index);
	
	$price=$_POST["ProdPrice"];
	$price=str_replace("'", "", $price);
	
	$cart=$_SESSION['cart'];
	$cartArray = explode(",", $cart);	

	$finalCart;
	for ($x = 0; $x < count($cartArray); $x++) 
	{

		if($x != $index)
		{
			if(isset($finalCart))
			{
				$finalCart=$finalCart . "," .+$cartArray[$x];
			}
			else
			{
				$finalCart=$cartArray[$x];	
			}
		}
	}

	unset($_SESSION['cart']);
	$_SESSION['cart']=$finalCart;
	$_SESSION['cart-price']=$_SESSION['cart-price']-$price;
	echo "SUCCESS";

}
catch(Exception $e)
{
	echo $e->getMessage();
}
?>