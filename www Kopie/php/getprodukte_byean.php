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
if (is_numeric($_GET['ean'])){ $ean=intval($_GET['ean']);
}else{ $ean=($_GET['ean']);
}
 $orderby=($_GET['orderby']);
 
  //Insert Data into mysql
$query=mysql_query("SELECT *,  ROUND((1-(REPLACE(`dpPreis`, ',', '.')/REPLACE(`dpPackungsgroesse`, ',', '.'))/(REPLACE(`mpPreis`, ',', '.')/REPLACE(`mpPackungsgroesse`, ',', '.'))),2)*100 as Ersparnis FROM search_ALL_union LEFT JOIN DiscounterBilder ON disid = discounterid WHERE mpID=" . $ean . " OR dpEAN = " . $ean . " OR dpEAN2 =" . $ean . " OR dpEAN3 =" . $ean . " OR mpEAN = " . $ean . " OR mpEAN2 = " . $ean . " OR mpEAN3 = " . $ean  . " OR mpEAN4 = " . $ean   . " OR mpEAN5 =" . $ean . " OR dpEAN4 =" . $ean . " OR dpEAN5 = " . $ean); 


if(mysql_num_rows($query)== 0){
 return;}{      
  while($row = mysql_fetch_array($query))
  {
   $arr[] = $row;
    }
		echo $json_response = json_encode($arr);
}
 ?>