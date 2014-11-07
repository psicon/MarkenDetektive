<?php
$server   = "localhost";   // MySQL-Server-Adresse (zB localhost)
$benutzer = "psicon_de";   // Benutzername fuer den Server
$passwort = "simpsons";   // dazugehoeriges Passwort
$db       = "";   // Name der Datenbank

if(!mysql_connect($server, $benutzer, $passwort))
     echo "Datenbankverbindung fehlgeschlagen!";

	 ?>