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
$query=mysql_query("SELECT * FROM ProduktTyp");
      
  while($row = mysql_fetch_array($query))
  {
   	echo "<li onClick=(selectDiscounterProduktebyTyp('$row[0]'))><a href='#produktliste'>" ;
	echo "<img class='ui-li-icon' src='http://www.psicon.de/discountermarken/img/typen/$row[2]'></img>$row[1]</a>";
	echo "</li>";
    }
 ?>