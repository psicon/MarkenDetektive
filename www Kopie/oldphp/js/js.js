var maximumid;

$('#produktselect').on('change', function (event) {
    alert("I alert only on #myPage");
});

function scanme() {
	$.mobile.loading( 'show', {
 	textVisible: true,text: 'Lade...bleib geduldig', 
	html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"
});          	
       // $('#clearfields').trigger('click');
        window.plugins.barcodeScanner.scan(scanSuccess, scanError);
    }
    
	    var scanSuccess = function(result) {
        //alert("scanSuccess: " + result.text + ". Format: " + result.format + ". Cancelled: " + result.cancelled);
       
	    if (!result.cancelled) {
            var scancode = result.text;
            
            					selectean(result.text);
			   $.mobile.loading( 'hide' );           

        } else {
            $('#scanstatus').addClass('errortxt').removeClass('successtxt').html("Cancelled");
						   $.mobile.loading( 'hide' );           

        }        
    };

    var scanError = function(error) {
		navigator.notification.alert(
    'Scan failed:' + error,  // message
    alertDismissed,         // callback
    'MarkenDetektive',            // title
    'Ok'                  // buttonName
);
         $('#scanstatus').addClass('errortxt').removeClass('successtxt').html("Error: " + error);
    };
     

$(document).bind("mobileinit", function(){
            $.mobile.defaultDialogTransition = "none";
            $.mobile.defaultPageTransition = "none";
        });
		$(document).bind("pagebeforeshow", function(event, data) {
    // this doesn't seem to turn off animations
    //$(".ui-panel-menu").panel("option", "animate", false);
    // this does turn off animation
    //$(".ui-panel-animate").removeClass('ui-panel-animate');
	$.mobile.panel.prototype.options.animate = false;
});


function initdb()
{
	html5sql.openDatabase("de.psicon.markengeheimnisse.dbtest", "Markengeheimnisse", 3*1024*1024);
	var sql_create = "CREATE TABLE IF NOT EXISTS tblMain (" +
		"  id tinyint(4) ," +
		"  Bezeichnung char(50)  ," +
		"  Preis char(10)  ," +
		"  Discounter char(40));" 
 	
	html5sql.process(sql_create, function()
							{ //Success
								//window.alert("Database created");
                         		console.log("Database created");
								console.log("Database delete succesfull");
                         },
                         		function(error, failingQuery){ //Failure
								window.alert("Error: " + error.message);
                             console.log("Error Creating Database: " + error.message);
                         });
					getnewid();	  
	
 			  
} 
		function getnewid(){
   html5sql.process(
             [{
                 sql:"SELECT MAX(id) as maximum FROM tblMain "
             }],
             function(transaction, results, rowsArray){
 				 maximumid = rowsArray[0].maximum;
 				 console.log("Retrieved data:" + maximumid);
               console.log("DONE ITTERATE");
			   if(maximumid >= 0){               
			   		console.log("NOT NULL");
					maximumid ++;
//var sql_insert = 	"INSERT INTO tblMain (id) VALUES" +
						//"(" + maximumid +"); " 

	html5sql.process(sql_insert, function()
							{ //Success
								//window.alert("Database insert succesfull");
					console.log("MaxID set to: " + maximumid);
                         },
                         		function(error, failingQuery){ //Failure
								//window.alert("Error Inserting data: " + error.message);
                             console.log("Error Inserting data: " + error.message);
                         });
					}
					else{
						console.log("NULL");
						maximumid = 0;
						console.log("maximumid set to 0");
						var sql_insert = 	"INSERT INTO tblMain (id) VALUES" +
						"(0); " 

	html5sql.process(sql_insert, function()
							{ //Successf
								//window.alert("Database insert succesfull");
                         		console.log("Database insert succesfull");
                         },
                         		function(error, failingQuery){ //Failure
								//window.alert("Error Inserting data: " + error.message);
                             console.log("Error Inserting data: " + error.message);
                         });
						}
              },
             function(error, statement){
					console.log("Error Retrieving data: " + error.message + " WHILE: " + statement);
                 $("#itemlist").append("<li>"+error.message+" Occured while processing: "+statement+"</li>");
             }
        );	

  }
			
			function geteinkaufsliste(){
				 				 console.log("Geteinkaufsliste started");

   html5sql.process(
             [{
                 sql:"SELECT * FROM tblMain "
             }],
             function(transaction, results, rowsArray){
 				 //maximumid = rowsArray[0].maximum;
 				 console.log("Retrieved data:" + results);
				    var len = results.rows.length, i;
   msg = "Found rows: " + len ;
			   console.log(msg);
			   					msg="";

				for (i = 0; i < len; i++){
					console.log(results.rows.item(i));
					 
				 msg = msg + "<li data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='trash'><a onClick=(deleteeinzelproduktfromeinkaufsliste('" + results.rows.item(i).Bezeichnung + "')) href='#'>" + "<b>" + results.rows.item(i).Bezeichnung + " </b><br/> " + results.rows.item(i).Preis + " € | " + results.rows.item(i).Discounter + "</a></li>";
			   }
			   			   $("#einkaufslist").listview('refresh');

                 $("#einkaufslist").empty().append(msg);
			   $("#einkaufslist").listview('refresh');
               console.log("DONE ITTERATE");
			    
              },
             function(error, statement){
					console.log("Error Retrieving data: " + error.message + " WHILE: " + statement);
                 $("#itemlist").append("<li>"+error.message+" Occured while processing: "+statement+"</li>");
             }
        );	

  }
  function geteinkaufslistestart(){
				 				 console.log("Geteinkaufsliste started");

   html5sql.process(
             [{
                 sql:"SELECT * FROM tblMain LIMIT 5"
             }],
             function(transaction, results, rowsArray){
 				 //maximumid = rowsArray[0].maximum;
 				 console.log("Retrieved data:" + results);
				    var len = results.rows.length, i;
   msg = "Found rows: " + len ;
			   console.log(msg);
			   					msg="";

				for (i = 0; i < len; i++){
					console.log(results.rows.item(i));
					 
				 msg = msg + "<li data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='trash'><a onClick=(deleteeinzelproduktfromeinkaufsliste('" + results.rows.item(i).Bezeichnung + "')) href='#'>" + "<b>" + results.rows.item(i).Bezeichnung + " </b><br/> " + results.rows.item(i).Preis + " € | " + results.rows.item(i).Discounter + "</a></li>";
			   }
			   			   $("#einkaufsliststart").listview('refresh');

                 $("#einkaufsliststart").empty().append(msg);
			   $("#einkaufsliststart").listview('refresh');
               console.log("DONE ITTERATE");
			    
              },
             function(error, statement){
					console.log("Error Retrieving data: " + error.message + " WHILE: " + statement);
                 $("#itemlist").append("<li>"+error.message+" Occured while processing: "+statement+"</li>");
             }
        );	

  }
  
  function deleteeinzelproduktfromeinkaufsliste(name){
			                         		console.log("TRY Database insert ");
														 getnewid();

			var sql_insert = 	"DELETE FROM tblMain WHERE Bezeichnung='" + name +"'; " 
					

	html5sql.process(sql_insert, function()
							{ //Success
								//window.alert("Database insert succesfull");
                         		console.log("Database insert succesfull");
								
navigator.notification.alert(
    'Erfolgreich von Einkaufsliste entfernt',  // message
    alertDismissed,         // callback
    'Weg!',            // title
    'Supiii'                  // buttonName
);								geteinkaufsliste();
								geteinkaufslistestart()
								maximumid = maximumid + 1;
                         },
                         		function(error, failingQuery){ //Failure
								//window.alert("Error Inserting data: " + error.message);
								alert("Fehler: " + error.message);
																geteinkaufsliste();
geteinkaufslistestart();
                             console.log("Error Inserting data: " + error.message);
                         });
						 }
						 
function appbeenden(){
	navigator.notification.confirm(
          'MarkenDetektive wirklich beenden?'
        , function(button) {
              if (button == 2) {
			  navigator.app.exitApp()
			  
			  }}
        , 'Wirklich beenden?'
        , 'Nö,Jaaa'
    );  		 }


						 
function deleteeinkaufsliste(){								
navigator.notification.confirm(
          'Wirklich Einkaufsliste leeren?'
        , function(button) {
              if (button == 2) {
			                         		console.log("TRY Database insert ");
														 getnewid();

			var sql_insert = 	"DELETE FROM tblMain; " 
					

	html5sql.process(sql_insert, function()
							{ //Success
								//window.alert("Database insert succesfull");
                         		console.log("Database insert succesfull");

				  
				 						geteinkaufsliste();
								maximumid = maximumid + 1;
                         },
                         		function(error, failingQuery){ //Failure
								//window.alert("Error Inserting data: " + error.message);
								alert("Fehler: " + error.message);
																geteinkaufsliste();

                             console.log("Error Inserting data: " + error.message);
                         });
						 }}
        , 'Löschen?'
        , 'Nö,Jaaa'
    );  		 }


  
				 
		function addeinkaufsliste(name, preis, discounter){
			                         		console.log("TRY Database insert ");
														 getnewid();

			var sql_insert = 	"INSERT INTO tblMain (id, Bezeichnung, Preis, Discounter) VALUES" +
						"(" + maximumid + ", '" + name + "','" + preis + "','" + discounter + "'); " 
					

	html5sql.process(sql_insert, function()
							{ //Success
								//window.alert("Database insert succesfull");
                         		console.log("Database insert succesfull");
								
navigator.notification.alert(
    'Erfolgreich zur Einkaufslite hinzugefügt',  // message
    alertDismissed,         // callback
    'Hinzugefügt',            // title
    'Supiii'                  // buttonName
);									maximumid = maximumid + 1;
								geteinkaufslistestart();
                         },
                         		function(error, failingQuery){ //Failure
								//window.alert("Error Inserting data: " + error.message);
								alert("Fehler: " + error.message);
                             console.log("Error Inserting data: " + error.message);
                         });
						 }

				 
function selectean(id){
	
		selectMarkenEinzelProdukt(id);
		selectDiscounterEinzelProdukt(id);

    
}

function selectallfromdiscounter(){
			$.mobile.changePage( "#discounter", { transition: "slide", changeHash: true });

	$.mobile.loading( 'show', {
 	textVisible: true,text: 'Lade...bleib geduldig', theme: 'a',
		html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"

});          			

    //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_all_from_discounter.php",
           dataType: "html",   //expect html to be returned
           success: function(response){
			   $.mobile.loading( 'hide' );           
		    $("#itemlist").listview('refresh');
           $("#itemlist").empty().append(response);
           $("#itemlist").listview('refresh');
           response = "";
           
           }
           });
}


$('#comment_form').on('submit', function(e){       
    e.preventDefault();
	console.log("triggered search");
    var formData = $("#comment_form").serialize();
	var dataString = formData.substring(10);
	if(dataString == ""){navigator.notification.alert(
    'Bitte gebe uns einen Suchbegriff!',  // message
    alertDismissed,         // callback
    'Suche...aber nach was?',            // title
    'Na gut...'                  // buttonName
);}else{
	dataString = dataString.replace("+"," ");
     //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "POST",
           url: "http://psicon.de/discountermarken/php_test/search.php",
    data: { 'dataString': dataString },
		              dataType: "html",   //expect html to be returned
           success: function(response){ 
		   			$.mobile.changePage( "#searchresults", { transition: "slide", changeHash: true });       
		   $("#productlistsearch").listview('refresh');
           $("#productlistsearch").empty().append(response);
           $("#productlistsearch").listview('refresh');
           response = "";
           
           
           }
           });  
}
    return false;
});


function selectallfromhandelsmarken(letter){
    //Get values of the input fields and store it into the variables.
			   		   			$.mobile.changePage( "#handelsmarkenlisteletter", { transition: "slide", changeHash: true });       

	$.mobile.loading( 'show', {
 	textVisible: true,text: 'Lade...bleib geduldig', theme: 'a',
		html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"

});
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/handelsmarken/select_all_from_handelsmarken" + letter + ".php",
           dataType: "html",   //expect html to be returned
           success: function(response){ 
          			$.mobile.loading( 'hide' );

 		   $("#handelsmarkenlist").listview('refresh');

           $("#handelsmarkenlist").empty().append(response);
           $("#handelsmarkenlist").listview('refresh');
           response = "";
           
           }
           });
}

function selectfrommarkenprodukteletter(letter){
	$.mobile.changePage( "#markenproduktelisteletter", { transition: "slide", changeHash: true });       

	$.mobile.loading( 'show', {
 	textVisible: true,text: 'Lade...bleib geduldig', theme: 'a',
		html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"

});
    //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/markenprodukte/select_all_from_handelsmarken" + letter + ".php",
           dataType: "html",   //expect html to be returned
           success: function(response){                   			$.mobile.loading( 'hide' );

  $("#markenproduktelist").listview('refresh');

           $("#markenproduktelist").empty().append(response);
           $("#markenproduktelist").listview('refresh');
           response = "";
           
           }
           });
}


function selectnewproducts(){
	$.mobile.changePage( "#newproducts", { transition: "slide", changeHash: true });

	$.mobile.loading( 'show', {
 	textVisible: true,text: 'Lade...bleib geduldig', theme: 'a',
		html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"

});          			
     //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_new_products.php",
           dataType: "html",   //expect html to be returned
           success: function(response){   			   
		   $.mobile.loading( 'hide' );           
        
		    $("#newproductslist").listview('refresh');
           $("#newproductslist").empty().append(response);
           $("#newproductslist").listview('refresh');
           response = "";
           
           }
           });
}

function selectprodukttypen(){
	$.mobile.changePage( "#kategorien", { transition: "slide", changeHash: true });

	$.mobile.loading( 'show', {
 	textVisible: true,text: 'Lade...bleib geduldig', theme: 'a',
		html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"

});          			
     //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_all_produkttypen.php",
           dataType: "html",   //expect html to be returned
           success: function(response){   			   
		   $.mobile.loading( 'hide' );           
        
		    $("#produkttypen").listview('refresh');
           $("#produkttypen").empty().append(response);
           $("#produkttypen").listview('refresh');
           response = "";
           
           }
           });
}




function selectDiscounterProdukte(disid){
    //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_discounterprodukte.php?ean=" + disid,
           dataType: "html",   //expect html to be returned
           success: function(response){           $("#productlist").listview('refresh');

           $("#productlist").empty().append(response);
           $("#productlist").listview('refresh');
           response = "";
           
           
           }
           });
}
		   function selectHandelsProdukte(disid){
    //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_discounterprodukte_Handeslmarke.php?ean=" + disid,
           dataType: "html",   //expect html to be returned
           success: function(response){           $("#productlist").listview('refresh');

           $("#productlist").empty().append(response);
           $("#productlist").listview('refresh');
           response = "";
           
           
           }
           });
		   
		   
    
    
    
}function selectDiscounterProdukte(disid){
    //Get values of the input fields and store it into the variables.
    $.mobile.changePage( "#produktliste", { transition: "slide", changeHash: true });
    
	$.mobile.loading( 'show', {
                     textVisible: true,text: 'Lade...bleib geduldig',
                     html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"
                     });          	

    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_discounterprodukte.php?ean=" + disid,
           dataType: "html",   //expect html to be returned
           success: function(response){           $("#productlist").listview('refresh');
		   $.mobile.loading( 'hide' );

           $("#productlist").empty().append(response);
           $("#productlist").listview('refresh');
           response = "";
           
           
           }
           });
		   
		   
    
    
    
}
function selectDiscounterProduktebyTyp(disid){
    //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_discounterprodukte_Typ.php?ean=" + disid,
           dataType: "html",   //expect html to be returned
           success: function(response){           $("#productlist").listview('refresh');

           $("#productlist").empty().append(response);
           $("#productlist").listview('refresh');
           response = "";
           
           
           }
           });
		   
		   
    
    
    
}

function selectkontrollnummern(id){
 	$.mobile.changePage( "#kontrollnummern", { transition: "slide", changeHash: true });

	$.mobile.loading( 'show', {
 	textVisible: true,text: 'Lade...bleib geduldig', 
	html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"
});          	
    //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_kontrollnummern.php?ean=" + id,
           dataType: "html",   //expect html to be returned
           success: function(response){           
		   $.mobile.loading( 'hide' );           
        $("#kontrollnummernliste").listview('refresh');

           $("#kontrollnummernliste").empty().append(response);
           $("#kontrollnummernliste").listview('refresh');
           response = "";
           }
           });
    
    selectMarkenEinzelProdukt(id);
    
}


function selectDiscounterEinzelProdukt(id){
    $.mobile.changePage( "#produktselect", { transition: "slide", changeHash: true });
    
	$.mobile.loading( 'show', {
                     textVisible: true,text: 'Lade...bleib geduldig',
                     html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"
                     });          	

    //Get values of the input fields and store it into the variables.
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_discountereinzelprodukt.php?ean=" + id,
           dataType: "html",   //expect html to be returned
           success: function(response){           $("#discounterprodukt").listview('refresh');
		   $.mobile.loading( 'hide' );

           $("#discounterprodukt").empty().append(response);
           $("#discounterprodukt").listview('refresh');
           response = "";
           }
           });
    
    selectMarkenEinzelProdukt(id);
    
}

function selectMarkenEinzelProdukt(id){    
$.mobile.changePage( "#produktselect", { transition: "slide", changeHash: true });

    //Get values of the input fields and store it into the variables.
	$.mobile.loading( 'show', {
                     textVisible: true,text: 'Lade...bleib geduldig',
                     html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"
                     });          	
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_markeneinzelprodukt.php?ean=" + id,
           dataType: "html",   //expect html to be returned
           success: function(response){
            $("#markenprodukt").listview('refresh');
		   $.mobile.loading( 'hide' );

           $("#markenprodukt").empty().append(response);
           $("#markenprodukt").listview('refresh');
           response = "";
           
           }
           });
    
    
    
}


function selectMarkenEinzelProduktID(id){
    //Get values of the input fields and store it into the variables.
	$.mobile.loading( 'show', {
                     textVisible: true,text: 'Lade...bleib geduldig',
                     html: "<span class='ui-bar ui-overlay-c ui-corner-all'><img src='./images/ajax-loader.gif' /><br/>Lade...bleib geduldig</span>"
                     });          	
    $.ajax({    //create an ajax request to load_page.php
           type: "GET",
           url: "http://psicon.de/discountermarken/php_test/select_markeneinzelproduktID.php?ean=" + id,
           dataType: "html",   //expect html to be returned
           success: function(response){
            $("#markenprodukt").listview('refresh');
		   $.mobile.loading( 'hide' );

           $("#markenprodukt").empty().append(response);
           $("#markenprodukt").listview('refresh');
           response = "";
           
           }
           });
    
    
    
}


/**
 * energize.js v0.1.0
 *
 * Speeds up click events on mobile devices.
 * https://github.com/davidcalhoun/energize.js
 */

(function() {  // Sandbox
 /**
  * Don't add to non-touch devices, which don't need to be sped up
  */
 if(!('ontouchstart' in window)) return;
 
 var lastClick = {},
 isThresholdReached, touchstart, touchmove, touchend,
 click, closest;
 
 /**
  * isThresholdReached
  *
  * Compare touchstart with touchend xy coordinates,
  * and only fire simulated click event if the coordinates
  * are nearby. (don't want clicking to be confused with a swipe)
  */
 isThresholdReached = function(startXY, xy) {
 return Math.abs(startXY[0] - xy[0]) > 5 || Math.abs(startXY[1] - xy[1]) > 5;
 };
 
 /**
  * touchstart
  *
  * Save xy coordinates when the user starts touching the screen
  */
 touchstart = function(e) {
 this.startXY = [e.touches[0].clientX, e.touches[0].clientY];
 this.threshold = false;
 };
 
 /**
  * touchmove
  *
  * Check if the user is scrolling past the threshold.
  * Have to check here because touchend will not always fire
  * on some tested devices (Kindle Fire?)
  */
 touchmove = function(e) {
 // NOOP if the threshold has already been reached
 if(this.threshold) return false;
 
 this.threshold = isThresholdReached(this.startXY, [e.touches[0].clientX, e.touches[0].clientY]);
 };
 
 /**
  * touchend
  *
  * If the user didn't scroll past the threshold between
  * touchstart and touchend, fire a simulated click.
  *
  * (This will fire before a native click)
  */
 touchend = function(e) {
 // Don't fire a click if the user scrolled past the threshold
 if(this.threshold || isThresholdReached(this.startXY, [e.changedTouches[0].clientX, e.changedTouches[0].clientY])) {
 return;
 }
 
 /**
  * Create and fire a click event on the target element
  * https://developer.mozilla.org/en/DOM/event.initMouseEvent
  */
 var touch = e.changedTouches[0],
 evt = document.createEvent('MouseEvents');
 evt.initMouseEvent('click', true, true, window, 0, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
 evt.simulated = true;   // distinguish from a normal (nonsimulated) click
 e.target.dispatchEvent(evt);
 };
 
 /**
  * click
  *
  * Because we've already fired a click event in touchend,
  * we need to listed for all native click events here
  * and suppress them as necessary.
  */
 click = function(e) {
 /**
  * Prevent ghost clicks by only allowing clicks we created
  * in the click event we fired (look for e.simulated)
  */
 var time = Date.now(),
 timeDiff = time - lastClick.time,
 x = e.clientX,
 y = e.clientY,
 xyDiff = [Math.abs(lastClick.x - x), Math.abs(lastClick.y - y)],
 target = closest(e.target, 'A') || e.target,  // needed for standalone apps
 nodeName = target.nodeName,
 isLink = nodeName === 'A',
 standAlone = window.navigator.standalone && isLink && e.target.getAttribute("href");
 
 lastClick.time = time;
 lastClick.x = x;
 lastClick.y = y;
 
 /**
  * Unfortunately Android sometimes fires click events without touch events (seen on Kindle Fire),
  * so we have to add more logic to determine the time of the last click.  Not perfect...
  *
  * Older, simpler check: if((!e.simulated) || standAlone)
  */
 if((!e.simulated && (timeDiff < 500 || (timeDiff < 1500 && xyDiff[0] < 50 && xyDiff[1] < 50))) || standAlone) {
 e.preventDefault();
 e.stopPropagation();
 if(!standAlone) return false;
 }
 
 /**
  * Special logic for standalone web apps
  * See http://stackoverflow.com/questions/2898740/iphone-safari-web-app-opens-links-in-new-window
  */
 if(standAlone) {
 window.location = target.getAttribute("href");
 }
 
 /**
  * Add an energize-focus class to the targeted link (mimics :focus behavior)
  * TODO: test and/or remove?  Does this work?
  */
 if(!target || !target.classList) return;
 target.classList.add("energize-focus");
 window.setTimeout(function(){
                   target.classList.remove("energize-focus");
                   }, 150);
 };
 
 /**
  * closest
  * @param {HTMLElement} node current node to start searching from.
  * @param {string} tagName the (uppercase) name of the tag you're looking for.
  *
  * Find the closest ancestor tag of a given node.
  *
  * Starts at node and goes up the DOM tree looking for a
  * matching nodeName, continuing until hitting document.body
  */
 closest = function(node, tagName){
 var curNode = node;
 
 while(curNode !== document.body) {  // go up the dom until we find the tag we're after
 if(!curNode || curNode.nodeName === tagName) { return curNode; } // found
 curNode = curNode.parentNode;     // not found, so keep going up
 }
 
 return null;  // not found
 };
 
 /**
  * Add all delegated event listeners
  *
  * All the events we care about bubble up to document,
  * so we can take advantage of event delegation.
  *
  * Note: no need to wait for DOMContentLoaded here
  */
 document.addEventListener('touchstart', touchstart, false);
 document.addEventListener('touchmove', touchmove, false);
 document.addEventListener('touchend', touchend, false);
 document.addEventListener('click', click, true);  // TODO: why does this use capture?
 
 })();