<?php 
/*
 * A Design by W3layouts  SURAJ 
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
 *
 */
include "app/config.php";
include "app/detect.php";

if ($page_name=='') {
	include $browser_t.'/index.html';
	}
elseif ($page_name=='index.html') {
	include $browser_t.'/index.html';
	}
elseif ($page_name=='preview.html') {
	include $browser_t.'/preview.html';
	}
elseif ($page_name=='about.html') {
	include $browser_t.'/about.html';
	}
elseif ($page_name=='delivery.html') {
	include $browser_t.'/delivery.html';
	}
elseif ($page_name=='news.html') {
	include $browser_t.'/news.html';
	}
elseif ($page_name=='contact.html') {
	include $browser_t.'/contact.html';
	}
elseif ($page_name=='contact-post.html') {
	include 'app/contact.php';
	}
else
	{
		include $browser_t.'/404.html';
	}

?>
