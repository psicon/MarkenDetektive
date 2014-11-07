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
  $hid=intval($_GET['hid']);
 $ptid=intval($_GET['ptid']);
 $peid=intval($_GET['peid']);
 
 $preis=($_GET['preis']);
 $bez=($_GET['bez']);
 $ean=($_GET['ean']);
 $beschr=($_GET['beschr']);
 $pgr=($_GET['pgr']);
  
   //Insert Data into mysql
if (!mysqli_query($con,"INSERT INTO MarkenProdukte  (HerstellerID, ProdukttypID, Bezeichnung, Preis, EAN, Beschreibung, Packungsgroesse, PackungsEinheitID, Bild, validated) VALUES (" . $hid . ", " . $ptid . ", " . $bez . ", " . $preis .", " . $ean . ", " . $beschr . ", " . $pgr . ", " . $peid . ", 'kein_produkt.jpg', 0)")){
	  die('Error: ' . mysqli_error($con));

	}
    echo  mysql_insert_id();  
   mysqli_close($con);

   
 ?>