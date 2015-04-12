<?php
session_start();
session_unset(); 
session_destroy();
$url ='http://localhost:8080/SeaStoreGit/index.html';
header( "Location: $url" );
?>