<?php
//Session initialisiern
session_start();

//Datenbankverbindung aufbauen
include('connect.inc.php');

//Configure and Connect to the Databse
 $con = mysql_connect($server,$benutzer,$passwort);
 if (!$con) {
 die('Could not connect: ' . mysql_error());
 }

 mysql_select_db("psicon_de", $con);
 mysql_query("SET NAMES 'utf8'", $con);
	 
  $letter=($_GET['letter']);
  //Insert Data into mysql
  $query=mysql_query("SELECT * FROM Discounter");
  $arr = array();
    
  while($row = mysql_fetch_array($query))
  {
   $arr[] = $row;
    }
	
	echo $json_response = json_encode($arr);
 ?>