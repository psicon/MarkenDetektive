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
 
  //Insert Data into mysql
$query=mysql_query("SELECT * FROM search_Handelsmarken WHERE Bezeichnung LIKE 'g%'");
      
  while($row = mysql_fetch_array($query))
  {
   	echo "<li onClick=(selectHandelsProdukte('$row[3]'))><a href='#produktliste'>" ;
	echo "$row[0]<small>($row[1])</small></a>";
	echo "</li>";
    }
 ?>