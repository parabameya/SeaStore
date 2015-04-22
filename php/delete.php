<?php
// connect to the database
include "connect.php";
 
 // check if the 'id' variable is set in URL, and check that it is valid
 if (isset($_GET['id']) && is_numeric($_GET['id']))
 {
 // get id value
 $id = $_GET['id'];
 
 // delete the entry
 $result = mysql_query("DELETE FROM products WHERE product_id=$id")
 or die(mysql_error()); 
 
 // redirect back to the view page
 header("Location: http://localhost:8080/SeaStoreGit/dashboard.html");
 }
 else
 // if id isn't set, or isn't valid, redirect back to view page
 {
 header("Location: http://localhost:8080/SeaStoreGit/dashboard.html");
 }
 
?>