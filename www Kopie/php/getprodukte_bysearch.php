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
 $orderby=($_GET['orderby']);
 
  //Insert Data into mysql
$query=mysql_query("SELECT * FROM `search_ALL_union` WHERE mpBezeichnung LIKE '%"  . $ean . "%'  OR mpEAN LIKE '%"  . $ean . "%' OR mpEAN2 LIKE '%"  . $ean . "%' OR mpEAN3 LIKE '%"  . $ean . "%' OR mpEAN4 LIKE '%"  . $ean . "%' OR mpEAN5 LIKE '%"  . $ean . "%' OR mpBeschreibung LIKE '%"  . $ean . "%' OR dpBezeichnung LIKE '%"  . $ean . "%' OR dpBeschreibung LIKE '%"  . $ean . "%' OR dpEAN LIKE '%"  . $ean . "%' OR dpEAN2 LIKE '%"  . $ean . "%' OR dpEAN3 LIKE '%"  . $ean . "%' OR dpEAN4 LIKE '%"  . $ean . "%' OR dpEAN5 LIKE '%"  . $ean . "%' order by dpbeschreibung");
if(mysql_num_rows($query)== 0){
 return;}{      
  while($row = mysql_fetch_array($query))
  {
   $arr[] = $row;
    }
		echo $json_response = json_encode($arr);
}
 ?>