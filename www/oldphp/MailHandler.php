<?php 
header('content-type: application/json; charset=utf-8');

if (isset($_GET["name"])) {
 	$name = strip_tags($_GET['name']);
	$email = strip_tags($_GET['email']);
	$Herstellerm = strip_tags($_GET['Herstellerm']);
	$Bezeichnungm = strip_tags($_GET['Bezeichnungm']);
	$Preism = strip_tags($_GET['Preism']);
	$EANm = strip_tags($_GET['EANm']);
	
	$wo = strip_tags($_GET['wo']);
	$Herstellerd = strip_tags($_GET['Herstellerd']);
	$Bezeichnungd = strip_tags($_GET['Bezeichnungd']);
	$Preisd = strip_tags($_GET['Preisd']);
	$EANd = strip_tags($_GET['EANd']);
	
	$wie = strip_tags($_GET['wie']);
	
	$header = "Vorschlagn von: ". $name . " <" . $email . ">rn"; 

	$ip = $_SERVER['http://www.psicon.de/']; 
	$httpref = $_SERVER['HTTP_REFERER']; 
	$httpagent = $_SERVER['HTTP_USER_AGENT']; 
	$today = date("F j, Y, g:i a");    
	
	$recipient = 'produktvorschlag@psicon.de';
	$subject = 'Produktvorschlag fuer Markendetektive';
	$mailbody = "
Name: $name 
Email: $email 

Vorgeschlagenes Markenprodukt:
Hersteller: $Herstellerm
Bezeichnung: $Bezeichnungm
Preis: $Preism
EAN: $EANm

Vorgeschlagenes NoNameprodukt:
Wo: $wo
Hersteller: $Herstellerd
Bezeichnung: $Bezeichnungd
Preis: $Preisd
EAN: $EANd

Wie kommt er drauf: $wie

IP: $ip
Browser info: $httpagent
Referral: $httpref
Sent: $today
";
	$result = 'success';

	if (mail($recipient, $subject, $mailbody, $header)) {
		echo json_encode($result);
	}
}
?>
