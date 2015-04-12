<?php
//settings for connecting to MySQL

$user = 'root';
$password = 'root';
$db = 'seastore';
$host = 'localhost';
$port = 8889;
$link = mysql_connect(
   "$host:$port", 
   $user, 
   $password
);
$db_selected = mysql_select_db(
   $db, 
   $link
);
?>