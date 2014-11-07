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
$query=mysql_query("SELECT *,  ROUND((1-(REPLACE(`dpPreis`, ',', '.')/REPLACE(`dpPackungsgroesse`, ',', '.'))/(REPLACE(`mpPreis`, ',', '.')/REPLACE(`mpPackungsgroesse`, ',', '.'))),2)*100 as Ersparnis FROM search_ALL_union_union LEFT JOIN DiscounterBilder ON disid = discounterid WHERE mpID=" . $ean . " OR dpEAN = " . $ean . " OR dpEAN2 =" . $ean . " OR dpEAN3 =" . $ean . " OR mpEAN = " . $ean . " OR mpEAN2 = " . $ean . " OR mpEAN3 = " . $ean  . " OR mpEAN4 = " . $ean   . " OR mpEAN5 =" . $ean . " OR dpEAN4 =" . $ean . " OR dpEAN5 = " . $ean); 
if(mysql_num_rows($query)== 0){
echo "<strong>NICHT GEFUNDEN<i class='icon-warning-sign'></i></strong><br/><li data-icon='envelope-alt'><a href='#vorschlag'>Produkte jetzt vorschlagen</a></li>";}else{   
   while($row = mysql_fetch_array($query))
  { 
  
	$name = trim($row[12]);
	$preis = trim($row[15]); 
	$discounter = trim($row[21]);
	$name = str_replace(' ', '', $name);
	$preis = str_replace(' ', '', $preis);
	$discounter = str_replace(' ', '', $discounter);
   	echo "<li>" ;

if($name==""){
			echo "<strong>NICHT GEFUNDEN<i class='icon-warning-sign'></i></strong><br/><li data-icon='envelope-alt'><a href='#vorschlag'>Produkte jetzt vorschlagen</a>";
		}else{
		echo "<img style='max-height: 74%;' src='http://www.psicon.de/discountermarken/img/discounterprodukte/$row[20]'></img><b>$row[12]</b>" .
	"<br/><small><b>Preis:</b> $row[15] €</small><br/><small><b>Wo:</b> $row[21] - <img style='max-height: 5%; max-width: 50%;' src='http://www.psicon.de/discountermarken/img/discounter/$row[34]'></img></small>" .
	"<br/><small><b>Packungsgroesse:</b> $row[26] $row[9]</small><br/><small><b>Ersparnis: </b> $row[35] %</small>" .
			"<div onClick=(addeinkaufsliste('" . $name . "','" . $preis . "','" . $discounter . "')) class='message info'><i class='icon-plus'></i><p>Einkaufsliste</p></div>";	
			echo "</li>";}
    }}
	 
 ?>