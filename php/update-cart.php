<?php
session_start(); //start session
include "connect.php";
$product_code = $_POST["productTitle"];
echo $product_code;


//create a cart session variable
//it should be an array of [product id]
