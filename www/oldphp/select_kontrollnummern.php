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
 $ean=($_GET['ean']);
  //Insert Data into mysql
$query=mysql_query("SELECT * FROM Kontrollnummern WHERE Typ = " . $ean); 
if(mysql_num_rows($query)== 0){
echo "<strong>NICHTS GEFUNDEN<i class='icon-warning-sign'></i></strong><br/><li data-icon='envelope-alt'><a href='#vorschlag'>Produkte jetzt vorschlagen</a></li>";}{   
   while($row = mysql_fetch_array($query))
  { 
  
	$name = trim($row[12]);
	$preis = trim($row[15]); 
	$discounter = trim($row[21]);
	$name = str_replace(' ', '', $name);
	$preis = str_replace(' ', '', $preis);
	$discounter = str_replace(' ', '', $discounter);
   	echo "<li>" ;
	echo "<p><strong>$row[1]</strong><br/>$row[3]</p><p>$row[2]</p>";	
	echo "</li>";
    }}
	 
 ?>