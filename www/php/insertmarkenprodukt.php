<?php
//Session initialisiern
session_start();

//Datenbankverbindung aufbauen
include('connect.inc.php');

//Configure and Connect to the Databse
 $con = mysqli_connect($server,$benutzer,$passwort) or die ("could not connect to mysql"); 
 
 mysqli_select_db($con,"psicon_de")  or die ("no database"); 
if (!mysqli_set_charset($con, "utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
} else {
 } //Pull data from home.php front-end page
  $hid=intval($_GET['hid']);
 $ptid=intval($_GET['ptid']);
 $peid=intval($_GET['peid']);
 $disid=intval($_GET['disid']);
 
 $preis=($_GET['preis']);
 $preisd=($_GET['preisd']);
 $bez=($_GET['bez']);
 $bezd=($_GET['bezd']);
 $ean=($_GET['ean']);
 $eand=($_GET['eand']);
 $beschr=($_GET['beschr']);
 $pgr=($_GET['pgr']);
 $pgrd=($_GET['pgrd']);
  $stri = "INSERT INTO MarkenProdukte  (HerstellerID, ProdukttypID, Bezeichnung, Preis, EAN, Beschreibung, Packungsgroesse, PackungsEinheitID, Bild, validated) VALUES ('" . $hid . "', '" . $pti . "', '" . $bez . "', '" . $preis ."', '" . $ean . "', '" . $beschr . "', '" . $pgr . "', '" . $pei . "', 'kein_produkt.jpg', '0')";
  //echo $stri;
   //Insert Data into mysql
if (!mysqli_query($con,$stri)){
	  die('Error: ' . mysqli_error($con));

	}
	
	$returnwert=mysqli_insert_id($con);

$stridiscoutner = "INSERT INTO DiscounterProdukte  (MarkenProduktID, ProdukttypID,  Beschreibung, Bezeichnung, Preis , EAN,  DiscounterID,  Packungsgroesse, PackungseinheitID, Bild, validated) VALUES ('" . $returnwert . "', '" . $ptid . "', '" . $bezd . "', '" . $bezd . "', '" . $preisd ."', '" . $eand . "', '" . $disid . "', '" . $pgrd . "', '" . $peid . "', 'kein_produkt.jpg', '0')";

if (!mysqli_query($con,$stridiscoutner)){
	  die('Error: ' . mysqli_error($con));

	}

    echo  $returnwert;  
   mysqli_close($con);

   
 ?>