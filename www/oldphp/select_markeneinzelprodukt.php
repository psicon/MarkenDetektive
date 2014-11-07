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
$query=mysql_query("SELECT DISTINCT mpID, mpBezeichnung , mpPreis, mpDatum, mpEAN, mpEAN2, mpEAN3, mpBeschreibung, mpPackungsgroesse, peBezeichnung, mpBild, mherName, mherBild FROM search_ALL_union_union WHERE mpID=" . $ean . " OR dpEAN = " . $ean . " OR dpEAN2 =" . $ean . " OR dpEAN3 =" . $ean . " OR mpEAN = " . $ean . " OR mpEAN2 =" . $ean . " OR mpEAN3 =" . $ean . " OR mpEAN4 =" . $ean   . " OR mpEAN5 =" . $ean );  
if(mysql_num_rows($query)== 0){
    include('openean.php');
 } else{
  while($row = mysql_fetch_array($query))
  {
	  $name = trim($row[1]);
	$preis = trim($row[2]); 
		$name = str_replace(' ', '', $name);
	$preis = str_replace(' ', '', $preis); 
   	echo "<li>" ;
 		if($name==""){
			echo "<strong>NICHT GEFUNDEN<i class='icon-warning-sign'></i></strong><br/><li data-icon='envelope-alt'><a href='#vorschlag'>Produkte jetzt vorschlagen</a>";
		}else{
	 	echo "<img style='max-height: 74%;' src='http://www.psicon.de/discountermarken/img/markenprodukte/$row[10]'></img><b>$row[1]</b>" .
	"<br/><small><b>Preis:</b> $row[2] €</small><br/><small><b>Hersteller:</b> $row[11]</small><img style='max-height: 4%;' src='http://www.psicon.de/discountermarken/img/MarkenHerstellerLogos/$row[12]'></img>" . 
		"<br/><small><b>Packungsgroesse:</b> $row[8] $row[9]</small><br/><small><b>(Unnützes) Wissen:<br/></b> $row[7]</small><br/>" .
			"<div onClick=(addeinkaufsliste('" . $name . "','" . $preis . "','Markenprodukt')) class='message info'><i class='icon-plus'></i><p>Einkaufsliste</p></div>";
 }
	echo "</li>";
    }}
 ?>