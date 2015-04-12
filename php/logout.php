<?php
session_start();
session_unset(); 
session_destroy();
$url ='http://localhost:8080/SeaStore/index.html';
header( "Location: $url" );
?>