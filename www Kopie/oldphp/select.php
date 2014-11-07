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
 //Pull data from home.php front-end page
 $ean=($_GET['ean']);

  //Insert Data into mysql
$query=mysql_query("SELECT * FROM search_ALL_union WHERE dpEAN = '$ean'");
      
     echo "<p>given:" . $ean . "</li>";
 while($row = mysql_fetch_array($query))
  {
   	echo "<p>found:" . $row['mpEAN'] . "</li>";
  	echo "<p>found:" . $row['mpBezeichnung'] . "</li>";
   }
 
?>