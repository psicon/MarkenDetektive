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
 //Pull data from home.php front-end page
   //Insert Data into mysql
$query=mysql_query("	SELECT * FROM search_ALL_union WHERE mpID <>7889 ORDER BY mpID DESC , dpbeschreibung LIMIT 10");
      
 while($row = mysql_fetch_array($query))
  {
   $arr[] = $row;
    }
		echo $json_response = json_encode($arr);
 ?>