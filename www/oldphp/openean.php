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
	
	$test = strstr($array,"name_en=","descr=");
	$test = strstr($test,"descr=");	
	$descr = str_replace("descr=","",$test);
	iconv(mb_detect_encoding($array, mb_detect_order(), true), "UTF-8", $array);

	$ausgabe = str_replace("error=0","",utf8_encode($array));
	$ausgabe = str_replace("---","",$ausgabe);
	$ausgabe = str_replace("asin=","<br/>ASIN: ",$ausgabe);
	$ausgabe = str_replace("name=","<br/>Name: ",$ausgabe);
	$ausgabe = str_replace("vendor=","<br/>Hersteller: ",$ausgabe);
	$ausgabe = str_replace("detailname=","<br/>Detailname: ",$ausgabe);
	$ausgabe = str_replace("maincat=","<br/>Überkategorie: ",$ausgabe);
	$ausgabe = str_replace("origin=","<br/>Herkunft: ",$ausgabe);
	$ausgabe = str_replace("descr=","<br/>Beschreibung: ",$ausgabe);
	$ausgabe = str_replace("subcat=","<br/>Unterkategorie: ",$ausgabe);
	$ausgabe = str_replace("maincatnum=","<br/>",$ausgabe);
	$ausgabe = str_replace("subcatnum=","<br/>",$ausgabe);
	$ausgabe = str_replace("name_en=","<br/>Name Englisch: ",$ausgabe);
	$ausgabe = str_replace("descr_en=","<br/>Beschreibung Englisch: ",$ausgabe);
	$ausgabe = str_replace("detailname_en=","<br/>detailiert Englisch: ",$ausgabe);
	$ausgabe = str_replace("validated=","<br/>validiert: ",$ausgabe);
	$ausgabe = str_replace("contents=","<br/>Inhalte: ",$ausgabe);

	
if($error== 0){
	echo "<p><b>Gescannter Barcode: " . $ean. "</b></p>";
    echo $ausgabe;
	//echo "<p>Hersteller: " . $vendor. "</p>" . "<p>Produkt: " . $detailname . "</p>" . "<p>Beschreibung: " . $descr . "</p>";
}
if($error== 1){

echo "<strong>NICHT GEFUNDEN<i class='icon-warning-sign'></i></strong><br/><li data-icon='envelope-alt'><a href='#vorschlag'>Produkte jetzt vorschlagen</a></li>"; }
if($error== 2){

	echo "<p>die EAN war fehlerhaft (Checksummenfehler)</p>";
}
if($error== 3){

	echo "<p>die EAN war fehlerhaft (ungültiges Format / fehlerhafte Ziffernanzahl)</p>";
}
if($error== 4){

	echo "<p>es wurde eine für interne Anwendungen reservierte EAN eingegeben (In-Store, Coupon etc.)</p>";
}
	//parse_str($array);
	//echo $name;
 ?>