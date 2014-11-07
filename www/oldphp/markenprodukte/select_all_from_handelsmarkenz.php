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
$query=mysql_query("SELECT DISTINCT mpID, mpBezeichnung, mpPreis, mpDatum, mpEAN, mpEAN2, mpEAN3, mpBeschreibung, mpPackungsgroesse, peBezeichnung, mpBild, mherName, mherBild FROM search_ALL_union WHERE mpBezeichnung LIKE 'z%'");
      
  while($row = mysql_fetch_array($query))
  {
echo "<li onClick=(selectDiscounterEinzelProdukt('$row[0]'))><a href='#produktselect'>" ;
	echo "<img class='ui-li-icon' src='http://www.psicon.de/discountermarken/img/markenprodukte/$row[10]'></img><b>$row[1]</b>" .
	"<br/></a>";
	echo "</li>";
    }
 ?>