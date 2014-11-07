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
 //$discounterid=intval($_GET['discounterid']);
 //$orderby=($_GET['orderby']);
 
  //Insert Data into mysql
	$query=mysql_query("SELECT DISTINCT mpID, mpBezeichnung, mpPreis, mpDatum, mpEAN, mpEAN2, mpEAN3, mpBeschreibung, mpPackungsgroesse, peBezeichnung, mpBild, mherName, mherBild FROM search_ALL_union ORDER BY mpBezeichnung");
      
  while($row = mysql_fetch_array($query))
  {
   $arr[] = $row;
    }
	
	echo $json_response = json_encode($arr);
 ?>
 
 
 