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
   //Insert Data into mysql
$query=mysql_query("SELECT ID, Nachricht, Author, DATE_FORMAT(datum,'%d.%m.%Y') as Datum, valid FROM `MarkenDetektiveNews` WHERE valid = 1");
      
   while($row = mysql_fetch_array($query))
  {
	$Nachricht = $row['Nachricht']; 
	$Author =$row['Author']; 
	$Datum=$row['Datum']; 
	$Valid=$row['valid']; 
  }
   class Product {
       public $nachricht = "";
       public $author  = "";
       public $datum = "";
 		public $valid= "";
   }
   $e = new Product();
   $e->nachricht = $Nachricht;
   $e->author = $Author;
   $e->datum= $Datum;
   $e->valid = $Valid;
   
   	
   echo json_encode($e);
 
   
 ?>