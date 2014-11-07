<?php
 	//Session initialisiern
	session_start();
	header("Content-Type: text/html; charset=utf-8");

	//Pull data from home.php front-end page
	$ean=($_GET['ean']);
	$lookupurl="http://openean.kaufkauf.net/?ean=" . $ean . "&cmd=query&queryid=427846140";
 	$array = file_get_contents($lookupurl);
	
	$test = strstr($array,"---","error=");
	$test = strstr($test,"error=");	
	$error = str_replace("error=","",$test);
		    
	$test = strstr($array,"vendor=","detailname=");
	$test = strstr($test,"detailname=");	
	$detailname = str_replace("detailname=","",$test);
	
	$test = strstr($array,"maincat=","vendor=");
	$test = strstr($test,"vendor=");	
	$vendor = str_replace("vendor=","",$test);
	
	$test = strstr($array,"subcat=","maincat=");
	$test = strstr($test,"maincat=");	
	$maincat = str_replace("maincat=","",$test);
	
	$test = strstr($array,"maincatnum=","subcat=");
	$test = strstr($test,"subcat=");	
	$subcat = str_replace("subcat=","",$test);
	
	$test = strstr($array,"name_en=","descr=");
	$test = strstr($test,"descr=");	
	$descr = str_replace("descr=","",$test);
	iconv(mb_detect_encoding($array, mb_detect_order(), true), "UTF-8", $array);

		
	
if($error== 0){
	//echo "[{barcode: " . $ean . "}]";
    //echo $ausgabe;
	$vendor = utf8_encode($vendor);
	$detailname = utf8_encode($detailname);
	$maincat = utf8_encode($maincat);
	$subcat = utf8_encode($subcat);
	$descr = utf8_encode($descr);

	//echo '<p><b>Gescannter Barcode: </b>' . $ean . '</p>';
	//echo '<p><b>Hersteller: </b>' . $vendor . '</p>';
	//echo '<p><b>Produkt: </b>' . $detailname . '</p>';
	//echo '<p><b>Kategorie: </b>' . $maincat . '</p>';
	//echo '<p><b>Unterkategorie: </b>' . $subcat . '</p>';
	//echo '<p><b>Beschreibung: </b>' . $descr . '</p>';
	//$googlelink = 'https://www.google.de/?gws_rd=ssl#q=ean ' . $detailname . '&tbm=shop,"_system"';
	
class Product {
       public $scannedcode = "";
       public $scannedhersteller  = "";
       public $scannedprodukt = "";
	   	public $scannedkategorie = "";
       public $scannedunterkategorie  = "";
       public $scannedbeschreibung = "";
   }
   $e = new Product();
   $e->scannedcode = $ean;
   $e->scannedhersteller = $vendor;
   $e->scannedprodukt= $detailname;
   $e->scannedkategorie = $maincat;
   $e->scannedunterkategorie = $subcat;
   $e->scannedbeschreibung = $descr;
   	
   echo json_encode($e);

 	
}
if($error== 1){

class Returnwerte {
       public $Fehler = "";
         }
   $e = new Returnwerte();
   $e->Fehler = $ean . " wurde nicht in externer Datenbank gefunden!";
   echo json_encode($e);
}
if($error== 2){
class Returnwerte {
       public $Fehler = "";
          }
   $e = new Returnwerte();
   $e->Fehler = "Die EAN " . $ean. " war fehlerhaft (Checksummenfehler)";
   echo json_encode($e);
 }
if($error== 3){
class Returnwerte {
       public $Fehler = "";
          }
   $e = new Returnwerte();
   $e->Fehler = "Die EAN " . $ean. " war fehlerhaft (ungültiges Format / fehlerhafte Ziffernanzahl)";
   echo json_encode($e);
 }
if($error== 4){
class Returnwerte {
       public $Fehler = "";
          }
   $e = new Returnwerte();
   $e->Fehler = "Der Code " . $ean. " wurde wahrscheinlich für interne Anwendungen angegeben (In-Store, Coupon etc.)";
   echo json_encode($e);
 }
	//parse_str($array);
	//echo $name;
 ?>