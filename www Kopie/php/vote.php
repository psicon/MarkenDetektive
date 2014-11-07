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
 
 $mpean=($_GET['mpean']);
 $dpean=($_GET['dpean']);
 $uuid=($_GET['uuid']);
  $votevalue=($_GET['votevalue']);
  
  if ($votevalue==2){
$votevalue==-1;
	}
  
  $stri = "INSERT INTO validation  (mpean, dpean, uuid) VALUES ('" . $mpean . "', '" . $dpean . "', '" . $uuid . "')";
  //echo $stri;
   //Insert Data into mysql
if (!mysqli_query($con,$stri)){
	  die('Error: ' . mysqli_error($con));

	}

$stridiscoutner = "UPDATE DiscounterProdukte SET validated=validated+" . $votevalue . " WHERE ean='" . $dpean . "'";

if (!mysqli_query($con,$stridiscoutner)){
	  die('Error: ' . mysqli_error($con));

	}
	
	$strimarke = "UPDATE MarkenProdukte SET validated=validated+" . $votevalue . " WHERE ean='" . $mpean . "'";

if (!mysqli_query($con,$strimarke)){
	  die('Error: ' . mysqli_error($con));

	}

    echo  $returnwert;  
   mysqli_close($con);

   
 ?>