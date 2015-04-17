<?php
session_start(); //start session
include "connect.php";
$product_code = $_POST["productTitle"];
$product_price = str_replace("'", "", ($_POST["productPrice"]));
$product_code = str_replace("'", "", $product_code);

 if(isset($_SESSION['cart']))
 {
	 	$_SESSION['cart'] = $_SESSION['cart'] . "," . $product_code;
 	 	$_SESSION['cart-price']=$_SESSION['cart-price']+$product_price;
 }
 else
 {
 	$_SESSION['cart'] = $product_code;
 	$_SESSION['cart-price']=$product_price;
 }