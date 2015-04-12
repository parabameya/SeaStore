<?php
//settings for connecting to MySQL
$user = 'root';
$password = 'root';
$db = 'seastore';
$socket = 'localhost:/Applications/MAMP/tmp/mysql/mysql.sock';
$link = mysql_connect(
   $socket, 
   $user, 
   $password
);
$db_selected = mysql_select_db(
   $db, 
   $link
);
?>