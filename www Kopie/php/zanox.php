<?php
 	//Session initialisiern
	session_start();
	header("Content-Type: text/html; charset=utf-8");

	//Pull data from home.php front-end page
	$ean=($_GET['ean']);
	$lookupurl="http://api.zanox.com/xml/2011-03-01/products?q=kneipp&programs=&connectid=B01A9B4421FA4D3DE03C";
 	$array = file_get_contents($lookupurl);
	echo $array;
 ?>