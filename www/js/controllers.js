angular.module('starter.controllers', [])

.filter('slice', function() {
  return function(arr, start, end) {
    return (arr || []).slice(start, end);
  };
})

.service('ShoppingCartService', function(){
	console.log("ShoppingCartService setup");
	return {
		alerttest: function(){alert('TEST');},
		pushCartitem: function(cartitem){
 			//alert(cartitem.ean+"");			
			if(localStorage["cartitems"] == undefined){
				
 				
				var a = [];
 		
					a.push(cartitem)
					window.localStorage["cartitems"] = JSON.stringify(a);
					  //$scope.$apply;
					console.log("cartitems setted: " + cartitem);
			}else{
			var a = [];
			a = JSON.parse(localStorage["cartitems"]);
		
					a.push(cartitem)
					window.localStorage["cartitems"] = JSON.stringify(a);
					  //$scope.$apply;
					console.log("cartitems setted: " + cartitem);}
			},
		getCartitems: function(){
			var storeditems = [];
			console.log("array in storage: " + localStorage["cartitems"]);
			if(localStorage["cartitems"] == undefined){}else{
 			var storeditems = JSON.parse(localStorage["cartitems"]);
			console.log("cartitems got: " +  storeditems );}
			//alert(storeditems[0].itemname + '');
			
			return storeditems;
		},
		removeAllfromcart: function(){
				if(localStorage["cartitems"] == undefined){}else{

			a = [];
			window.localStorage["cartitems"] = JSON.stringify(a);
			console.log("cart:empty");}
		},
		removeCartitem: function(ean){
			a = JSON.parse(localStorage["cartitems"]);
   	for(var i =0;i<a.length;i++){
 			if(a[i][0]["itemean"] == ean){ 
 					 a.splice(i,1);
					 window.localStorage["cartitems"] =[];
					 window.localStorage["cartitems"] = JSON.stringify(a);}
		}
			
			
 		}
		
		}
	
	})
 

.service('LetterService', function(){
	console.log("Lertterservice setup");
	return {
		alerttest: function(){alert('TEST');},
		setLetter: function(letter){
			window.localStorage['selectedletter'] = letter;
			console.log("Letter setted: " + letter);

			},
		getLetter: function(){
			console.log("Letter got: " + window.localStorage['selectedletter'] );
			return window.localStorage['selectedletter'] + "";
		}
		
		}
	
	})
	
	.service('DeviceService', function(){
	console.log("DeviceService setup");
	return {
		alerttest: function(){alert('TEST');},
		setUuid: function(uuid){
			window.localStorage['uuid'] = uuid;
			console.log("uuid setted: " + uuid);

			},
		getUuid: function(){
			console.log("uuid got: " + window.localStorage['uuid'] );
			return window.localStorage['uuid'] + "";
		}
		
		}
	
	})
 
 
	.service('WizardService', function(){
	console.log("WizardService setup");
	return {
		alerttest: function(){alert('TEST');},
		setEAN: function(ean){
			window.localStorage['wizardEAN'] = ean;
			console.log("ean setted: " + ean);

			},
		setEANdiscount: function(ean){
			window.localStorage['wizardEANdiscount'] = ean;
			console.log("eandiscount setted: " + ean);

			},
			setKategorie: function(id){
			window.localStorage['wizardKategorie'] = id;
			console.log("wizardKategorie setted: " + id);

			},
			setHersteller: function(id){
			window.localStorage['wizardHersteller'] = id;
			console.log("wizardHersteller setted: " + id);

			},
			setDiscounter: function(id){
			window.localStorage['wizardDiscounter'] = id;
			console.log("wizardDiscounter setted: " + id);
				
				
			},
			setPackungsid: function(id){
			window.localStorage['wizardPackungsid'] = id;
			console.log("wizardPackungsid setted: " + id);

			},
			setMarkenprodukt: function(product){
			window.localStorage['wizardMarkenprodukt'] = JSON.stringify(product);
			console.log("wizardMarkenprodukt setted: " + window.localStorage['wizardMarkenprodukt']);

			},
			setDiscounterprodukt: function(product){
			window.localStorage['wizardDiscounterprodukt'] = JSON.stringify(product);
			console.log("wizardDiscounterprodukt setted: " + window.localStorage['wizardDiscounterprodukt']);

			},
			getAll: function(){
				
				var Markenprodukt = JSON.parse(localStorage["wizardMarkenprodukt"]);

				var Discounterprodukt = JSON.parse(localStorage["wizardDiscounterprodukt"]);

				console.log(Markenprodukt);
				console.log(Discounterprodukt);
				console.log("MarkenEan got: " + window.localStorage['wizardEAN'] );
				console.log("MarkenKategorie got: " + window.localStorage['wizardKategorie'] );
				console.log("MarkenHersteller got: " + window.localStorage['wizardHersteller'] );
				console.log("Markenprodukt got: " + Markenprodukt.name );
				console.log("MarkenPreis got: " + Markenprodukt.price );
				console.log("Wissen got: " + Markenprodukt.knowledge );
				console.log("MarkenPackungsinhalt got: " + Markenprodukt.package );
				console.log("Packungstyp got: " + window.localStorage['wizardPackungsid']);
				console.log("DiscounterEan got: " + window.localStorage['wizardEANdiscount'] );
				console.log("DiscounterProdukt got: " + Discounterprodukt.name );
				console.log("DiscounterPreis got: " + Discounterprodukt.price );
				console.log("DiscounterPackunsinhalt got: " + Discounterprodukt.package );
				console.log("Discounter got: " + window.localStorage['wizardDiscounter'] );

				var markenean = window.localStorage['wizardEAN'];
				var markenkat = window.localStorage['wizardKategorie'];
				var markenhersteller = window.localStorage['wizardHersteller'];
				var markenprodukt = Markenprodukt.name;
				var markenpreis = Markenprodukt.price;
				var wissen = Markenprodukt.knowledge;
				var markeninhalt = Markenprodukt.package;
				var packungstyp = window.localStorage['wizardPackungsid'];
				var discountean = window.localStorage['wizardEANdiscount'];
				var discountprodukt = Discounterprodukt.name;
				var discountpreis = Discounterprodukt.price ;
				var discountinhalt = Discounterprodukt.package ;
				var discounter =  window.localStorage['wizardDiscounter'];
 
				
				eintragen = new Array(markenean, markenkat, markenhersteller, markenprodukt, markenpreis, wissen, markeninhalt, packungstyp, discountean, discountprodukt, discountpreis, discountinhalt, discounter);
				return eintragen;
		}
		
		}
	
	})
 
 
 .service('KontrollnummerntypService', function(){
	console.log("KontrollnummerntypService setup");
	return {
		alerttest: function(){alert('TEST');},
		setTyp: function(typ){
			window.localStorage['selectedtyp'] = typ;
			console.log("typ setted: " + typ);

			},
		getTyp: function(){
			console.log("Typ got: " + window.localStorage['selectedtyp'] );
			return window.localStorage['selectedtyp'] + "";
		}
		
		}
	
	})
  
 .service('DiscounterService', function(){
	console.log("Discounterservice setup");
	return {
 		setDiscounter: function(discounter){
			window.localStorage['selecteddiscounter'] = discounter;
			console.log("Discounter setted: " + discounter);

			},
		getDiscounter: function(){
			console.log("discounter got: " + window.localStorage['selecteddiscounter'] );
			return window.localStorage['selecteddiscounter'] + "";
		}
		
		}
	
	})
	
	.service('KategorieService', function(){
	console.log("KategorieService setup");
	return {
 		setKategorie: function(kat){
			window.localStorage['selectedkat'] = kat;
			console.log("KategorieService setted: " + kat);

			},
		getKategorie: function(){
			console.log("KategorieService got: " + window.localStorage['selectedkat'] );
			return window.localStorage['selectedkat'] + "";
		}
		
		}
	
	})
	
 .service('ProdukteService', function(){
	console.log("ProdukteService setup");
	return {
 		setProdukt: function(produkt){
			window.localStorage['selectedprodukt'] = produkt;
			console.log("produkt setted: " + produkt);

			},
		getProdukt: function(){
			console.log("produkt got: " + window.localStorage['selectedprodukt'] );
			return window.localStorage['selectedprodukt'] + "";
		},
		setShops: function(excludedshops){
			window.localStorage['excludedshops'] = excludedshops;
			
		}
		,
		getShops: function(){
			//var catids =	"&CategoryIds=14,3,147,32,27,160,4,66,11,10,16,5,121,18,9,17,137,100,23,119,291,90,78,115,109,309,237,321,89,218,64,181,82,195,72,159,219,273,314,97,2,68,222,225,171,201,38,275,95,83,206,53,8,80,123,43,306,313,210,70,51,63,36,298,67,7,145,319,194,34,207,223,265,22,292,13,220,204,293,214,170,267,179,15,157,192,224,52,250,122,87,300,65,61,259,253,71,193,312,197&ExcludeSubCategories=true"
			//var shopids = 	"";//"573,1727,3690,35,245,273,1668,2262,100,948,441,1243,256"
			//alert(window.localStorage['excludedshops']);
			return window.localStorage['excludedshops'] + ""
			}
		
		}
	
	})
	
  .service('SuchService', function(){
	console.log("SuchService setup");
	return {
		addSuchbegriff: function(suchbegriff){
		//alert(cartitem.ean+"");			
		//alert(suchbegriff[0].Bezeichnung);
			if(localStorage["lastsearches"] == undefined){
				
 				
				var a = [];
					a.unshift(suchbegriff);
					window.localStorage["lastsearches"] = JSON.stringify(a);
					  //$scope.$apply;
					  
					console.log("searches setted: " + suchbegriff);
			}else{
			var a = [];
			a = JSON.parse(localStorage["lastsearches"]);
 
					a.unshift(suchbegriff);
					window.localStorage["lastsearches"] = JSON.stringify(a);
					  //$scope.$apply;
					console.log("searches setted: " + suchbegriff);}
			},
		getSearches: function(){
			var suchbegriffe = [];
			//console.log("array in storage: " + localStorage["lastsearches"]);
			if(localStorage["lastsearches"] == undefined){
				//alert('emptyyy');
				}else{
 			var suchbegriffe = JSON.parse(localStorage["lastsearches"]);
			console.log("searches got: " +  suchbegriffe );}
			//alert(storeditems[0].itemname + '');
			//alert('emptyyy');
			//alert(suchbegriffe[0].Bezeichung);
			//alert(suchbegriffe[0]);
			return suchbegriffe;
		},
 		setSuchbegriff: function(suchbegriff){
			window.localStorage['suchbegriff'] = suchbegriff;
			console.log("suchbegriff setted: " + suchbegriff);

			},
				setSuchbegriffdetektive: function(suchbegriff){
			window.localStorage['suchbegriffdetektive'] = suchbegriff;
			console.log("suchbegriffdetektive setted: " + suchbegriff);

			},
		setIDorEAN: function(idorean){
			window.localStorage['idorean'] = idorean;
			console.log("idorean setted: " + idorean);

			},
		getIDorEAN: function(){
			console.log("idorean got: " + window.localStorage['idorean'] );
			return window.localStorage['idorean'] + "";
		},
		getSuchbegriff: function(){
			console.log("suchbegriff got: " + window.localStorage['suchbegriff'] );
			return window.localStorage['suchbegriff'] + "";
		},
		getSuchbegriffdetektive: function(){
			console.log("suchbegriffdetektive got: " + window.localStorage['suchbegriffdetektive'] );
			return window.localStorage['suchbegriffdetektive'] + "";
		}
		
		}
	
	})
	 
	
 .controller('ShoppingCartCtrl', function($scope, $ionicModal, $timeout, $ionicLoading, $state, $http, $stateParams, $ionicPopup, ProdukteService, SuchService,ShoppingCartService) {
 							   	//$ionicLoading.show();

// Triggered on a button click, or some other target
$scope.newItem = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.bezeichnung" placeholder="Produktbezeichnung"><br><input type="text" ng-model="data.wo" placeholder="Wo kaufen?">',
    title: 'Eigenes Produkt hinzufügen',
    subTitle: 'Bitte mindestens Produktbezeichnung eingeben',
    scope: $scope,
    buttons: [
      { text: 'Abbrechen' },
      {
        text: '<b>Speichern</b>',
        type: 'button-balanced',
        onTap: function(e) {
          if (!$scope.data.bezeichnung) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
			  
 var cartitems = [    			{ 	itemname: $scope.data.bezeichnung, 
				  									itemdiscounter: $scope.data.wo, 	
													itemean: $scope.data.bezeichnung,
													itempreis: 0
													}   
   								];
 
 				$ionicPopup.alert({
								 title: $scope.data.bezeichnung + '',
								 template: 
								 '<p style="text-align:center;">wurde erfolgreich zu deiner Einkaufsliste hinzugefügt!</p>'
							   }); 				 ShoppingCartService.pushCartitem(cartitems);
          }
        }
      },
    ]
  });
  }

  data = ShoppingCartService.getCartitems();
  $scope.cartitems = data;
  console.log("cart:");
 							   	$ionicLoading.hide();

  console.log(data);
     // Open the login modal
	
  $scope.deletecart = function() {
	  var confirmPopup = $ionicPopup.confirm({
     title: '<h4 style="text-align:center;">Fertig eingekauft?</h4>',
     template: '<p style="text-align:center;"><b>Möchtest du deine Einkaufsliste komplett leeren?</b><br> Tipp: <br>einzelne Punkt kannst du durch zur Seite schieben erledigen!</p>',
	 buttons: [
      { text: 'Nein, noch nicht!', type: 'button-assertive' },
      {
        text: 'Ja, löschen!',
        type: 'button-balanced',
		onTap: function(e) {
					ShoppingCartService.removeAllfromcart();
					$scope.$apply();
			    	$state.go("app.home");
        }}]
   });
		

  }
  
     $scope.deleteitem = function(itemean) {
  		   ShoppingCartService.removeCartitem(itemean);
			if($state.current.name == "app.shoppingcart")
					{
						$state.transitionTo($state.current, $stateParams, {
							reload: true,
							inherit: false,
							notify: true
						});
					}
	   }
  
  
  
	  
	  $scope.getProdukt = function(suche) {
	  //alert(suche);
	  //alert(suche.indexOf("EAN:"));

	  if(suche.indexOf("EAN:")!=-1){
		  
	  var repl = suche.replace("EAN:","");
	  //alert(repl);
 			
		repl= "0" + repl ;
 		var repl2 = repl.substr(1);						
 									 suche = "EAN:(" + repl + " OR " + suche +" OR " + repl2 +")";
									 				alert(suche);
	if(suche==""){$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Bitte gebe mir einen Suchbegriff!' 
							   });}else{
		$ionicLoading.show();
    	//$scope.modal.hide();
		//alert("Starte Suche nach: " + suche);
		console.log($state.current.name);
		SuchService.setSuchbegriff(suche);
		SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=" + suche);
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: suche.nach, 
				  									Datum: today
													}   
   								];
								
 		$state.go("app.preisvergleich");
		if($state.current.name == "app.preisvergleich")
		{
			$state.transitionTo($state.current, $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});
		}
}
  
									 
	
	  }else{				//alert("EAN:" + scanned + " EAN:" + result.text);
	if(suche==""){$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Bitte gebe mir einen Suchbegriff!' 
							   });}else{
		$ionicLoading.show();
    	//$scope.modal.hide();
		//alert("Starte Suche nach: " + suche);
		console.log($state.current.name);
		SuchService.setSuchbegriff(suche);
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: suche.nach, 
				  									Datum: today
													}   
   								];
 		$state.go("app.produktebysearch");
		if($state.current.name == "app.produktebysearch")
		{
			$state.transitionTo($state.current, $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});
		}
}
  }
	};
 
	})
 
  .controller('wizardCtrl', function($scope, $ionicModal, $timeout, $ionicLoading, $state, $http, $stateParams, $ionicPopup, ProdukteService, SuchService,ShoppingCartService, WizardService) {
	  
	  $scope.items = [
    { id: 1, name: 'g - Gramm'},
    { id: 2, name: 'ml - Milliliter'},
    { id: 3, name: 'l - Liter'},
    { id: 4, name: 'kg - Kilogramm'},
    { id: 5, name: 'mg - Milligramm'},
    { id: 6, name: 'St - Stück'}
 
	];
	
	
	

	  
	 	 $scope.step = 1;
        $scope.setStep = function(step){
         $scope.step = step;
		}
		$scope.setHerstellerwizard = function(id){

			WizardService.setHersteller(id); 
			$scope.step = $scope.step + 1;
			
			}
			$scope.setPackungsid = function(id){

			WizardService.setPackungsid(id); 
			$scope.step = $scope.step + 1;
			
			}
			$scope.setDiscounterwizard = function(id){
 			WizardService.setDiscounter(id);
			var eintragen = WizardService.getAll();
			//alert(eintragen);	 
 			$ionicPopup.confirm({
				 title: '<h4 style="text-align:center;">Eintragen?</h4>',
				 template: '<p style="text-align:center;">Soweit so gut!<b> Vielen Dank für deine Mühe!</b><br>Willst du das Produktpaar<b>'+ eintragen[3] +' - ' + eintragen[9] + '</b> nun zur Überprüfung eintragen?</p>',
				 buttons: [
				  { text: 'Ne...' },
				  {
					text: '<b>JA, KLAR!</b>',
					type: 'button-balanced',
					onTap: function(e) {
						
						
						
	var sqlinsertstring = "http://psicon.de/discountermarken/ionic/php/insertmarkenprodukt.php?hid=" + 
  eintragen[2] + "&ptid=" + eintragen[1] + "&bez=" + eintragen[3] + "&preis=" + eintragen[4] + "&ean=" +eintragen[0] + "&beschr=" + eintragen[5] + "&pgr=" + eintragen[6] + "&peid=" + eintragen[7] + "&disid=" + eintragen[12] + "&bezd=" + eintragen[9] + "&preisd=" + eintragen[10] + "&pgrd=" + eintragen[11] + "&eand=" + eintragen[8];
  //alert(sqlinsertstring);
  var responsePromise = $http.get(sqlinsertstring,{timeout:20000});
  
  
  responsePromise.success(function(data, status, headers, config) {
	
							 console.log(data);
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'Super!',
								 template: 
								 '<p style="text-align:center;">Vielen Dank für deinen Eintrag. Jetzt muss die Community das nur bestätigen.' +
								 '</br>Du siehst den aktuellen Status in der "Nicht bestätigt" Liste.</p>'
							   });
							    		$state.go("app.notvalidated");

		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
			
		
  			 					}
			 
			 }]});
			//$scope.step = $scope.step + 1;
			
			}
			
			$scope.getAllinfo = function(){
			WizardService.getAll(); 
			$scope.step = $scope.step + 1;
			
			}
			
		$scope.setKategoriewizard = function(id){

			WizardService.setKategorie(id);
			$scope.step = $scope.step + 1;
							 $ionicLoading.show();

  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getmarkenhersteller.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Herstellers = data;
							 console.log(data);
							 $ionicLoading.hide();

		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
			}
		
		
		$scope.getKategorienliste = function(product){
 			console.log("produktpackung:" + product.packtype);
 			WizardService.setMarkenprodukt(product);
  

 		$ionicLoading.show();
  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getkategorien.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Kategorien = data;
							 console.log(data);
							 $ionicLoading.hide();
							 				$scope.step = $scope.step + 1;

		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				}
				
				$scope.getDiscounterliste = function(product){
			WizardService.setDiscounterprodukt(product);
  

 		$ionicLoading.show();
  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getdiscounter.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Discounters = data;
							 console.log(data);
							 $ionicLoading.hide();
							 				$scope.step = $scope.step + 1;

		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				}
				
				$scope.setEAN = function(ean){
					var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getprodukte_byean.php?ean=" + ean.scannedcodefield,{timeout:12000});

console.log("Suchlink: http://psicon.de/discountermarken/ionic/php/getprodukte_byean.php?ean=" + ean.scannedcodefield);
                responsePromise.success(function(data, status, headers, config) {
					console.log("daten:" + data);
										console.log("datenlänge:" + data.length);

	 						 if (data.length == 0){WizardService.setEAN(ean.scannedcodefield);
					$scope.step = $scope.step + 1;}else{$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">EAN ' + ean.scannedcodefield + ' bereits vorhanden!' +
								 '</br>Suche doch mal danach.</p>'
							   });}
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
					}
					
				$scope.setEANdiscount = function(ean){
					var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getprodukte_byean.php?ean=" + ean.scannedcodefield,{timeout:12000});

console.log("Suchlink: http://psicon.de/discountermarken/ionic/php/getprodukte_byean.php?ean=" + ean.scannedcodefield);
                responsePromise.success(function(data, status, headers, config) {
	 						 if (data.length == 0){WizardService.setEANdiscount(ean.scannedcodefield);
					$scope.step = $scope.step + 1;}else{$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">EAN ' + ean.scannedcodefield + '  bereits vorhanden!' +
								 '</br>Suche doch mal danach.</p>'
							   });}
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
					}
					
					$scope.scanbarcodediscount = function(){
	  				 $ionicLoading.show();
    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.toggle(); // success/error callbacks may be passed
					}

	  cordova.plugins.barcodeScanner.scan(
	  
      		function (result) {
  			    //alert("We got a barcode\n" +
                //"Result: " + result.text + "\n" +
                //"Format: " + result.format + "\n" +
                //"Cancelled: " + result.cancelled);
				if(result.cancelled){	
					  				 $ionicLoading.hide();
			    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
					}

				console.log("Scanner cancelled");
				}else{
					    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
					}

				console.log("Scanned: " + result.text);
				//$scope.scannedcodefield = {};
 				//$scope.scannedcodefield.txt = result.text;
				WizardService.setEANdiscount(result.text);
				$scope.step = $scope.step + 1;
		   	    $ionicLoading.hide();
		
				}
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      } );
	  
	  }
					
					
	  $scope.scanbarcode = function(){
		  
	  				 $ionicLoading.show();
     if(ionic.Platform.is('ios')){
    window.plugins.flashlight.toggle(); // success/error callbacks may be passed
					}

	  cordova.plugins.barcodeScanner.scan(
      		function (result) {
  			    //alert("We got a barcode\n" +
                //"Result: " + result.text + "\n" +
                //"Format: " + result.format + "\n" +
                //"Cancelled: " + result.cancelled);
				if(result.cancelled){	
					  				 $ionicLoading.hide();
			    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
					}

				console.log("Scanner cancelled");
				}else{
					    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
					}

				console.log("Scanned: " + result.text);
				//$scope.scannedcodefield = {};
 				//$scope.scannedcodefield.txt = result.text;
				WizardService.setEAN(result.text);
				$scope.step = $scope.step + 1;
		   	    $ionicLoading.hide();
		
				}
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      } );
	  
	  }
	  })
 
 
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicLoading, $state, $http, $stateParams, $ionicPopup, ProdukteService, SuchService,ShoppingCartService, DeviceService) {
	 // Default to ios tab-bar style on android too
	  function errorHandler(error) {
        alert(error.message);
    }

	ionic.Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    //StatusBar.hide();
	
	DeviceService.setUuid(device.uuid +"");
	//alert(DeviceService.getUuid() +"");
     });


	 $scope.sharenewsonfb = function(news){		
				
				
				var confirmPopup = $ionicPopup.confirm({
     title: '<h4 style="text-align:center;">Teilen?</h4>',
     template: '<p style="text-align:center;">Möchtest du jetzt  deinen Facebookfreunden von MarkenDetektiven erzählen?</p>',
	 buttons: [
      { text: 'Später' },
      {
        text: '<b>JA, KLAR SOFORT!</b>',
        type: 'button-balanced',
		onTap: function(e) {
			openFB.login('email,publish_actions, public_profile',
            function() {
          openFB.api(
				{
					method: 'POST',
					path: '/me/feed',
					params: {
					message: "Coole App! Holt euch auch die App MarkenDetektive aus dem Appstore! " + news,
					 link: 'http://www.psicon.de/markendetektive',
					 application: 'geposted mit der MarkenDetektive App - jetzt im Appstore',
					 icon: 'http://www.psicon.de/discountermarken/img/icon1616.png'
					},
					success: $ionicPopup.alert({
											 title: 'Erfolgreich!',
											 template: 
											 '<p style="text-align:center;">Erfolgreich auf facebook gepostet!' +
											 '</br>Danke :)</p>'
										   })            

				})
				
				},
            function(error) {
$ionicPopup.alert({
											 title: 'Fehler',
											 template: 
											 '<p style="text-align:center;">Konnte dich leider nicht bei facebook einloggen!'
										   });
										               });
        }}]
   });}
  
  
  
	 $scope.getfbname = function(){		
			openFB.api({
            path: '/me',
            success: function(data) {
                console.log(JSON.stringify(data));
                alert(data.name);
             },
            error: errorHandler});
			
			
													   }
  
	 
 data = ShoppingCartService.getCartitems();

var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getshops.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
								
	 						 ProdukteService.setShops(data[0].parameter);
							 console.log(data);
							 
 		                 });
                responsePromise.error(function(data, status, headers, config) {
						
                });

var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getnews.php",{timeout:20000});
                 responsePromise.success(function(data, status, headers, config) {
	 						 $scope.nachrichten = data;
 							 
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();

							
							
                });
	
	 
		   $scope.cartitems = data;

	 	 


  console.log(data);  
     $scope.deleteitem = function(itemean) {
  		   ShoppingCartService.removeCartitem(itemean);
			if($state.current.name == "app.home")
					{
						$state.transitionTo($state.current, $stateParams, {
							reload: true,
							inherit: false,
							notify: true
						});
					}
	   }
  
  
 $scope.getProdukt = function(suche) {
	  //alert(suche);
	  //alert(suche.indexOf("EAN:"));
	  if(suche.indexOf("EAN:")!=-1){
	 var repl = suche.replace("EAN:","");
	  //alert(repl);
 			
		repl= "0" + repl ;
 		var repl2 = repl.substr(1);						
 									 suche = "EAN:(" + repl + " OR " + suche +" OR " + repl2 +")";
									 				//alert("EAN:" + scanned + " EAN:" + result.text);
	if(suche==""){$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Bitte gebe mir einen Suchbegriff!' 
							   });}else{
		$ionicLoading.show();
    	//$scope.modal.hide();
		//alert("Starte Suche nach: " + suche);
		console.log($state.current.name);
		SuchService.setSuchbegriff(suche);
		SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=" + suche);
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: suche.nach, 
				  									Datum: today
													}   
   								];
								
 		$state.go("app.preisvergleich");
		if($state.current.name == "app.preisvergleich")
		{
			$state.transitionTo($state.current, $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});
		}
}
  
									 
	
	  }else{				//alert("EAN:" + scanned + " EAN:" + result.text);
	if(suche==""){$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Bitte gebe mir einen Suchbegriff!' 
							   });}else{
		$ionicLoading.show();
    	//$scope.modal.hide();
		//alert("Starte Suche nach: " + suche);
		console.log($state.current.name);
		SuchService.setSuchbegriff(suche);
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: suche.nach, 
				  									Datum: today
													}   
   								];
 		$state.go("app.produktebysearch");
		if($state.current.name == "app.produktebysearch")
		{
			$state.transitionTo($state.current, $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});
		}
}
  }
	};
	 
   $scope.rateapp = function () { 
					if(ionic.Platform.is('ios')){
											 window.open("itmss://itunes.apple.com/de/app/markendetektive/id860190220",'_blank','location=yes,EnableViewPortScale=yes');
 					}
					else
					{
											 window.open("market://details?id=de.psicon.markengeheimnisse",'_system','location=yes,EnableViewPortScale=yes');

						}
}
   
   $scope.openlinkexternal = function (linkto) { 
					 $ionicLoading.show();
					 window.open(linkto,'_blank','location=yes,EnableViewPortScale=yes');
					 
				 	 $ionicLoading.hide();
}

  $scope.login = function() {
			openFB.login('email,publish_actions, public_profile',
            function() {
                //alert('Facebook login succeeded');
				 
            },
            function(error) {
                alert('Facebook login failed: ' + error.error_description);
            });}
			
	
 $scope.shareonfb = function(){

				
				var confirmPopup = $ionicPopup.confirm({
     title: '<h4 style="text-align:center;">Teilen?</h4>',
     template: '<p style="text-align:center;">Möchtest du jetzt  deinen Facebookfreunden von MarkenDetektiven erzählen?</p>',
	 buttons: [
      { text: 'Später' },
      {
        text: '<b>JA, KLAR SOFORT!</b>',
        type: 'button-balanced',
		onTap: function(e) {
			openFB.login('email,publish_actions, public_profile',
            function() {
          openFB.api(
				{
					method: 'POST',
					path: '/me/feed',
					params: {
					message: "Coole App! Holt euch auch die App MarkenDetektive aus dem Appstore!",
					 link: 'http://www.psicon.de/markendetektive',
					 application: 'geposted mit der MarkenDetektive App - jetzt im Appstore',
					 icon: 'http://www.psicon.de/discountermarken/img/icon1616.png'
					},
					success: $ionicPopup.alert({
											 title: 'Erfolgreich',
											 template: 
											 '<p style="text-align:center;">Erfolgreich auf facebook gepostet!' +
											 '</br>Danke :)</p>'
										   })
				});},
            function(error) {
$ionicPopup.alert({
											 title: 'Fehler',
											 template: 
											 '<p style="text-align:center;">Konnte dich leider nicht bei facebook einloggen!'
										   });
										               });
        }}]
   });}
   
   
  
  $scope.getDiscounterList = function () { 
  
	 $ionicLoading.show();
	 $state.go("app.discounter");
	if($state.current.name == "app.discounter")
					{
						$state.transitionTo($state.current, $stateParams, {
							reload: true,
							inherit: false,
							notify: true
						});
					}
					 };
					 
	$scope.getKategorieList = function () { 
  
	 $ionicLoading.show();
	 $state.go("app.kategorieauswahl");
	if($state.current.name == "app.kategorieauswahl")
					{
						$state.transitionTo($state.current, $stateParams, {
							reload: true,
							inherit: false,
							notify: true
						});
					}
					 };
 
 $scope.getMarkenProdukteList = function () { 
  
	 $ionicLoading.show();
	 $state.go("app.markenprodukte");
	if($state.current.name == "app.markenprodukte")
					{
						$state.transitionTo($state.current, $stateParams, {
							reload: true,
							inherit: false,
							notify: true
						});
					}
	
	
 };
 
  $scope.getNotvalidatedProdukteList = function () { 
  
	 $ionicLoading.show();
	 $state.go("app.notvalidated");
	if($state.current.name == "app.notvalidated")
					{
						$state.transitionTo($state.current, $stateParams, {
							reload: true,
							inherit: false,
							notify: true
						});
					}
	
	
 };
  $scope.mmtest = function (){ProdukteService.setProdukt('40111445');
	     		$state.go("app.produkt");}
  $scope.scanbarcode = function(){
	  				 $ionicLoading.show();
    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.toggle(); // success/error callbacks may be passed
					}

	  cordova.plugins.barcodeScanner.scan(
      		function (result) {
  			    //alert("We got a barcode\n" +
                //"Result: " + result.text + "\n" +
                //"Format: " + result.format + "\n" +
                //"Cancelled: " + result.cancelled);
				if(result.cancelled){	
					  				 $ionicLoading.hide();
			    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
					}

				console.log("Scanner cancelled");
				}else{
					    if(ionic.Platform.is('ios')){
    window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
					}
				SuchService.setSuchbegriffdetektive(result.text);
				console.log("Scanned: " + result.text);
				
				var scanned = result.text + "";				
				var scanned2 = result.text + "";
				scanned= "0" + result.text;
 				scanned2 = result.text.substr(1);						
 						//alert("EAN:" + scanned + " EAN:" + result.text);
 				ProdukteService.setProdukt("EAN:(" + scanned + " OR " + result.text+" OR " + scanned2 +")");
 				SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=EAN:(" + scanned + " OR " + result.text+" OR " + scanned2 +")");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: "EAN:" + result.text, 
				  									Datum: today
													}   
   								];
		SuchService.addSuchbegriff(sucharray);
		

				
 		$state.go("app.preisvergleich");
				
				if($state.current.name == "app.preisvergleich")
					{
						$state.transitionTo($state.current, $stateParams, {
							reload: true,
							inherit: false,
							notify: true
						});
					}}
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      } );
	  
	  },

  // Form data for the login modal
  $scope.loginData = {};

  // Create the search modal that we will use later
  //$ionicModal.fromTemplateUrl('templates/suche.html', {
   // scope: $scope
  //}).then(function(modal) {
  //  $scope.modal = modal;
  //});
  
   // Create the share modal that we will use later
  $ionicModal.fromTemplateUrl('templates/share.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.sharemodal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSearch = function() {
    $scope.modal.hide();
  },
  // Triggered in the login modal to close it
  $scope.closeShare = function() {
    $scope.sharemodal.hide();
  },
   // Open the login modal
  $scope.showshare = function() {
    $scope.sharemodal.show();
  };

$scope.searchprodukte = function(suche) {
	if(suche.nach==""){$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Bitte gebe mir einen Suchbegriff!' 
							   });}else{
		$ionicLoading.show();
    	//$scope.modal.hide();
		console.log("Starte Suche nach: " + suche.nach);
		console.log($state.current.name);
		SuchService.setSuchbegriffdetektive(suche.nach);
		SuchService.setSuchbegriff(suche.nach);
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: suche.nach, 
				  									Datum: today
													}   
   								];
		SuchService.addSuchbegriff(sucharray);
		$state.go("app.produktebysearch");
		if($state.current.name == "app.produktebysearch")
		{
			$state.transitionTo($state.current, $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});
		}
}
  };

  // Open the login modal
  $scope.showsearch = function() {
    //$scope.modal.show();
		 	 		$state.go("app.suche");

  };

  // Perform the  action when the user submits the login form
  $scope.doSearch = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
 
 
  
})
  

.controller('LoadingCtrl', function($scope, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
})

 .controller('getbyletterCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, LetterService) {
 							   	$ionicLoading.show();

 var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/gethandelsmarken.php?letter=" + LetterService.getLetter(),{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	 						 $scope.ProduktTypen = data;
							 //console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
							   							 $ionicLoading.hide();

                });
 
 
 })
 
 .controller('openeanCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService) {
				var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/openean.php?ean=" + ProdukteService.getProdukt(),{timeout:20000});
	 						 	$scope.openeanprodukte = "";
   								//$scope.myhtml='<i class="icon-left icon ion-loading-d" style="font-size:24px;" ></i><h3 >Suche in Datenbanken läuft...</h3>';
								$scope.showmyinfo = false;
								$scope.$apply();
															 							 $ionicLoading.hide();
                responsePromise.success(function(data, status, headers, config) {
							 $ionicLoading.show();
							 $scope.openeanprodukte = data;

							 responsePromise.then(function(response) {
							 							 $ionicLoading.hide();
							   							 $scope.showmyinfo = true;
	   					   								 $scope.myhtml="";
													 
     						});

		                 });
						 
						 
						 
                 responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:24px;" ><h3>Keine Antwort vom externen Server. Bitte später erneut versuchen!</h3>';
  							 
                });
				
				$scope.openlinkext = function (beschreibung) { 
 					 window.open('http://www.amazon.de/gp/search?ie=UTF8&camp=1638&creative=6742&index=aps&keywords=' + beschreibung  + '&linkCode=ur2&tag=wwwpsiconde-21','_blank','location=yes,EnableViewPortScale=yes');
	
	
 };
				
				
				
				 
  })
 
 
 .controller('zanoxCtrl', function($scope, $http, $ionicLoading, $ionicActionSheet, $state,$ionicPopup, ProdukteService, SuchService) {
				var produktstring = ProdukteService.getProdukt();
				var index = produktstring.indexOf("EAN:");
 				if (index==-1){
				var requeststring = "http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&query=" + ProdukteService.getProdukt()
				}else{
				var requeststring = "http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&query=" + ProdukteService.getProdukt()	
				}

				var responsePromise = $http.get(requeststring,{timeout:20000});
	 						 	$scope.produkte = "";
   								//$scope.myhtml='<i class="icon-left icon ion-loading-d" style="font-size:24px;" ></i><h3 >Suche in Datenbanken läuft...</h3>';
								$scope.showzanox = false;
								$scope.$apply();
															 							 $ionicLoading.hide();
                responsePromise.success(function(data, status, headers, config) {
							 $ionicLoading.show();
							 $scope.produkte = data;

 							 responsePromise.then(function(response) {
 							 							 if(data.ProductsSummary.TotalRecords==0){
															   var meinlink = "http://www.amazon.de/gp/search?ie=UTF8&camp=1638&creative=6742&index=aps&keywords=" + ProdukteService.getProdukt()  +"&linkCode=ur2&tag=wwwpsiconde-21"
															  $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:44px;" ><h3>Keine Suchergebnisse gefunden!</h3>';
															  								$scope.$apply();

															  $ionicLoading.hide();
															 
															 }
														 else{
															 $scope.many =  data.ProductsSummary.TotalRecords;
															 $ionicLoading.hide();
														 $scope.showzanox = true;
	   					   								 $scope.myhtml="";}
													 
     						});
							

							
		                 });
						 
						 
						 
                 responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:24px;" ><h3>Keine Antwort vom externen Server. Bitte später erneut versuchen!</h3>';
  							 
                });
					
			
		$scope.openlinkamazon = function (beschreibung) { 
 					 window.open('http://www.amazon.de/gp/search?ie=UTF8&camp=1638&creative=6742&index=aps&keywords=' + beschreibung  + '&linkCode=ur2&tag=wwwpsiconde-21','_blank','location=yes,EnableViewPortScale=yes');
	
	
 };			
 
 $scope.opendetails = function (productid, productean){if(productean == ""){
					SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/GetProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&ProductIds=" +productid);				}else{

						var scanned = productean + "";				
				var scanned2 = productean + "";
				scanned= "0" + productean;
 				scanned2 = productean.substr(1);						
 						//alert("EAN:" + scanned + " EAN:" + result.text);
 				ProdukteService.setProdukt("EAN:(" + scanned + " OR " + productean+" OR " + scanned2 +")");
					//alert("EAN:" + scanned + " EAN:" + result.text);
SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=EAN:(" + scanned + " OR " + productean +" OR " + scanned2+")");
				}
				$state.go("app.preisvergleich");}
		
				$scope.openlinkext = function (beschreibung, productid, productean) { 
			// Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Angebot öffnen</b> <i class="icon ion-ios7-redo-outline"></i>' }
       //,{ text: 'Browser ' }
     ],
      titleText: 'Angebot oder Preisvergleich öffnen',
	 cancelText: 'Abbrechen',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
				 

		 switch(index){
			 case 0:
			  					 window.open(beschreibung,'_blank','location=yes,EnableViewPortScale=yes');
								 break;
			 case 1:
			 					window.open(beschreibung,'_system','location=yes,EnableViewPortScale=yes');
								break;
			 };
       return true;
     },
      destructiveButtonClicked: function() {
				if(productean == ""){
					 SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/GetProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&ProductIds=" +productid);				
					}else{
						
							var scanned = productean + "";				
				var scanned2 = productean + "";
				scanned= "0" + productean;
 				scanned2 = productean.substr(1);						
 						//alert("EAN:" + scanned + " EAN:" + result.text);
 				ProdukteService.setProdukt("EAN:(" + scanned + " OR " + productean+" OR " + scanned2 +")");
					//alert("EAN:" + scanned + " EAN:" + result.text);
 					SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=EAN:(" + scanned + " OR " + productean +" OR " + scanned2 +")");

				}
        return true;
      }
   });
		  
 };
				
				
		
				 
  })
 
 
 .controller('getKontrollnummernCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, KontrollnummerntypService) {
				
											   	$ionicLoading.show();

				var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getkontrollnummern.php?typ=" + KontrollnummerntypService.getTyp(),{timeout:20000});
	 						 $scope.openeanprodukte = "";

                responsePromise.success(function(data, status, headers, config) {
							 $ionicLoading.show();
							 $scope.Kontrollnummern = data;
 							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Keine Rückmeldung vom Server!' +
								 '</br>Versuche es später nochmal.</p>' 
							   });
                });
				
			 
				
				
				
   })
 
 .controller('getkategorieCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, KategorieService) {
 							   	$ionicLoading.show();

  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getkategorien.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Kategorien = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getprodukte_bykategorie = function (task) { 
				 console.log("selected kategorie:" + task);
				 $scope.selectedKategorie = task+"";
				 KategorieService.setKategorie(task);
				 
				 $ionicLoading.show();
	 
	 	 		$state.go("app.produktebykategorie");

	
	
 };
 
 
 
 })
 
 .controller('getdiscounterCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, DiscounterService) {
 							   	$ionicLoading.show();

  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getdiscounter.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Discounters = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getprodukte_bydiscounter = function (task) { 
				 console.log("selected:" + task);
				 $scope.selectedDiscounter = task+"";
				 DiscounterService.setDiscounter(task);
				 
				 $ionicLoading.show();
	 
	 	 		$state.go("app.produktebydiscounter");

	
	
 };
 
 
 
 })

.controller('getProduktebydiscounterCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService,ShoppingCartService, DiscounterService) {
	
	 
 $scope.addtocart = function(name, discounter, ean,preis){
				  //alert('Trying to add: ' + name + ' d: ' + discounter + 'ean: ' + ean);
				  var cartitems = [    			{ 	itemname: name, 
				  									itemdiscounter: discounter, 	
													itemean: ean,
													itempreis: preis
													}   
   								];
 
 				$ionicPopup.alert({
								 title: name + '',
								 template: 
								 '<p style="text-align:center;">wurde erfolgreich zu deiner Einkaufsliste hinzugefügt!</p>'
							   }); 				 ShoppingCartService.pushCartitem(cartitems);
				  };
 
 
 							   	$ionicLoading.show();

  
  
				var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getprodukte_bydiscounter.php?discounterid=" + DiscounterService.getDiscounter(),{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	 						 $scope.Produkte = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getprodukt = function (task) { 
				
				
				 console.log("selected Produkt:" + task);
				 $scope.selectedProdukt = task+"";
				 ProdukteService.setProdukt(task);
				 
				 $ionicLoading.show();
	 
	 	 		$state.go("app.produkt");

	
	
 };
 
 
 
 })
 
 .controller('getNeuesteprodukteCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService) {
 
  							   	$ionicLoading.show();

  
				var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getneuesteprodukte.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	 						 $scope.Produkte = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getprodukt = function (task) { 
				
				
				 console.log("selected Produkt:" + task);
				 $scope.selectedProdukt = task+"";
				 ProdukteService.setProdukt(task);
				 
				 $ionicLoading.show();
	 
	 	 		$state.go("app.produkt");

	
	
 };
 
 
 
 })
 
 

.controller('getProduktebykategorieCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService, KategorieService) {
 							   	$ionicLoading.show();

  
  
				var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getprodukte_bykategorie.php?kategorie=" + KategorieService.getKategorie(),{timeout:19000});

                responsePromise.success(function(data, status, headers, config) {
	 						 $scope.Produkte = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getprodukt = function (task) { 
				
				
				 console.log("selected Produkt:" + task);
				 $scope.selectedProdukt = task+"";
				 ProdukteService.setProdukt(task);
				 
				 $ionicLoading.show();
	 
	 	 		$state.go("app.produkt");

	
	
 };
 
 
 
 })


.controller('getProduktebysearchCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService, SuchService) {
   							   	$ionicLoading.show();

  
				var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getprodukte_bysearch.php?ean=" + SuchService.getSuchbegriffdetektive(),{timeout:12000});

console.log("Suchlink: http://psicon.de/discountermarken/ionic/php/getprodukte_bysearch.php?searchitem=" + SuchService.getSuchbegriffdetektive());
                responsePromise.success(function(data, status, headers, config) {
	 						 $scope.Produkte = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getprodukt = function (task) { 
				
				
				 console.log("selected Produkt:" + task);
				 $scope.selectedProdukt = task+"";
				 ProdukteService.setProdukt(task);
				 
				 $ionicLoading.show();
	 	 		$state.go("app.produkt");

	
	
 };
 
 
 
 })
 

   
 
 .controller('getProduktebysearchexternCtrl', function($scope,$ionicActionSheet, $location, $window, $http, $ionicLoading, $state,$ionicPopup, $filter, ShoppingCartService,$ionicModal, ProdukteService, SuchService) {
	$scope.init = function(ean)
		  {
			//This function is sort of private constructor for controller
			$scope.ean = ean;
			//Based on passed argument you can make a call to resource
			//$resource.getMeBond(007)
					SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=EAN:" + ean);
		  };
   							   	$ionicLoading.show();
								$ionicModal.fromTemplateUrl('templates/filter.html', {
									
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openFilter = function() {
    $scope.modal.show();
  };
  $scope.closeFilter = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
								$scope.applyfilter = function(filter){}
								
$scope.pagenumber = 1;
 
 	
				 $scope.loadMore = function() {		
//alert('loadmore');	
																																	 $scope.moreavailable = true; 
														$scope.someavailable = true; 

				 $scope.pagenumber = $scope.pagenumber +1;
				 //$ionicLoading.show();
	 						 	//$scope.produkte = "";

var responsePromise = $http.get("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo90" + ProdukteService.getShops() + "&query=" + SuchService.getSuchbegriff() + "&CurrentPage=" + $scope.pagenumber,{timeout:20000});
     			//$scope.myhtml='<i class="icon-left icon ion-loading-d" style="font-size:24px;" ></i><h3 >Suche in Datenbanken läuft...</h3>';							

                responsePromise.success(function(data, status, headers, config) {

 							 responsePromise.then(function(response) {

var indicator = (data.ProductsSummary.TotalRecords/data.ProductsSummary.TotalRecords);
							 							 if(data.ProductsSummary.TotalRecords==0 ){
														$scope.someavailable = false; 
	 $ionicLoading.hide();
    $scope.$broadcast('scroll.infiniteScrollComplete');
										$scope.$apply();
															 }else if(data.ProductsSummary.TotalPages==data.ProductsSummary.CurrentPage || data.ProductsSummary.TotalPages<data.ProductsSummary.CurrentPage ){
															 $scope.moreavailable = false; 
															 $scope.showhtml = false;
															 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:24px;" ><h3>Nichts  gefunden</h3>';
															 $ionicLoading.hide();
    $scope.$broadcast('scroll.infiniteScrollComplete');
										$scope.$apply();

															  }
														 else{ 
														  $scope.moreavailable = true; 


																			 angular.forEach(data.Products,function(item) {
																				 //alert('try:' +item.ProductName);if(item.EAN != "null")
																				{
																					//alert(item.EAN);
																					var scanned = item.EAN + "";				
																					var scanned2 = item.EAN + "";
																					scanned= "0" + item.EAN;
 				scanned2 = item.EAN.substr(1);	
				var queryean = "EAN:(" + scanned + " OR " + item.EAN +" OR " + scanned2 +")";
																				SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&query="+ queryean + "&SortBy=Price&SortOrder=ascending");
																				
																				//ABHIER
																				
																				var suchlink = SuchService.getIDorEAN();
//alert(suchlink)
				suchlink = suchlink.replace("PageSize=4", "PageSize=40");
								//alert(suchlink);
				var responsePromise = $http.get(suchlink ,{timeout:10000});
				
				
	 						 	$scope.produktepreise = "";
   								//$scope.myhtml='<i class="icon-left icon ion-loading-d" style="font-size:24px;" ></i><h3 >Suche in Datenbanken läuft...</h3>';
								$scope.eanvergleich = false;
								$scope.$apply();
                 responsePromise.success(function(data2, status, headers, config) {
							 $ionicLoading.show();
							 $scope.produktepreise = data2;
							  						
 							 responsePromise.then(function(response) {
							 							 if(data2.ProductsSummary.TotalRecords==0){
													$ionicLoading.hide();
															 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:44px;" ><h3>Keine Suchergebnisse gefunden</h3>';
															 								$scope.$apply();
															 							 														 					   													$scope.showhtml = true;

															  }
														 else{
							 							item.PriceInformation.Currency = data2.Products[0].PriceInformation.DisplayPrice;
														$ionicLoading.hide();
	   					   								$scope.myhtml="";}
													 								$scope.$apply();

     						});
							

							
		                 });
																					
																					};
     $scope.produkte.Products.push(item);
});
		        //$scope.many =  data.ProductsSummary.TotalRecords;
										$scope.$apply();
										 

														 $scope.showzanox = true;
														 $scope.showhtml = false;
														
	   					   								 $scope.myhtml="";
														 															 							 

										

		$ionicLoading.hide();
																																				 
    $scope.$broadcast('scroll.infiniteScrollComplete');

 }
													 
     						});
							

							
		                 });
						 
						 
						 
                 responsePromise.error(function(data, status, headers, config) {

							 $ionicLoading.hide();
							 														 $scope.showhtml = true;

							 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:24px;" ><h3>Keine Antwort vom externen Server. Bitte später erneut versuchen!</h3>';
  							 
                });
				    $scope.$broadcast('scroll.infiniteScrollComplete');

				 	  }
 
 
  

				var responsePromise = $http.get("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo90" + ProdukteService.getShops() + "&query=" + SuchService.getSuchbegriff(),{timeout:20000});
				
	 						 	$scope.produkte = "";
   								
								$scope.showzanox = false;
								$scope.$apply();
                 responsePromise.success(function(data, status, headers, config) {
							 $ionicLoading.show();
							 $scope.produkte = data;
							 angular.forEach(data.Products,function(item) 
							 {
																			if(item.EAN != null)
																				{
																					//alert(item.EAN);
																					var scanned = item.EAN + "";				
																					var scanned2 = item.EAN + "";
																					scanned= "0" + item.EAN;
 				scanned2 = item.EAN.substr(1);	
				var queryean = "EAN:(" + scanned + " OR " + item.EAN +" OR " + scanned2 +")";
																				SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&query="+ queryean + "&SortBy=Price&SortOrder=ascending");
																				
																				//ABHIER
																				
																				var suchlink = SuchService.getIDorEAN();
//alert(suchlink)
				suchlink = suchlink.replace("PageSize=4", "PageSize=40");
								//alert(suchlink);
				var responsePromise = $http.get(suchlink ,{timeout:10000});
				
				
	 						 	$scope.produktepreise = "";
   								//$scope.myhtml='<i class="icon-left icon ion-loading-d" style="font-size:24px;" ></i><h3 >Suche in Datenbanken läuft...</h3>';
								$scope.eanvergleich = false;
								$scope.$apply();
                 responsePromise.success(function(data2, status, headers, config) {
							 $ionicLoading.show();
							 //$scope.produktepreise = data2;
	

//filter(data2,{ShopCategoryPath != "Vertrag", ShopCategoryPath != "Bundles", AffilinetCategoryId != "49"});					
 $scope.produktepreise = data2;
 //$scope.produktepreise = $scope.produktepreise.filter(function(el){
 //	return el.Products[0].ShopCategoryPath != "Vertrag";	
	//});							
							 //$scope.produktepreise = $filter('ShopCategoryPath')($scope.produktpreise,'!Vertrag','!Bundles'); 						
 							 responsePromise.then(function(response) {
							 							 if(data2.ProductsSummary.TotalRecords==0){
													$ionicLoading.hide();
															 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:44px;" ><h3>Keine Suchergebnisse gefunden</h3>';
															 								$scope.$apply();
															 							 														 					   													$scope.showhtml = true;

															  }
														 else{
							 							item.PriceInformation.Currency = data2.Products[0].PriceInformation.DisplayPrice;
														$ionicLoading.hide();
	   					   								$scope.myhtml="";}
													 								$scope.$apply();

     						});
							

							
		                 });
																					
																					};
     //$scope.produkte.Products.push(item);
});
 							 responsePromise.then(function(response) {
							 							 if(data.ProductsSummary.TotalRecords==0 && data.ProductsSummary.TotalRecords<=1){
															 $scope.myhtml = '<hr><br><br><h3>Keine Suchergebnisse gefunden</h3><br><br><hr>'; 							 														 					   													$scope.showhtml = true;
													$ionicLoading.hide();
															
															  }
														 else{
															 $scope.many =  data.ProductsSummary.TotalRecords;
 														 $scope.showzanox = true;
														 $scope.showhtml = false;
														$ionicLoading.hide();
	   					   								 $scope.myhtml="";}
													 
     						});
							

							
		                 });
						 
						 
						 
                 responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							 														 $scope.showhtml = true;

							 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:24px;" ><h3>Keine Antwort vom externen Server. Bitte später erneut versuchen!</h3>';
  							 
                });
				$scope.opendetails = function (productid, productean){if(productean == ""){
					SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/GetProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&ProductIds=" +productid + "&SortBy=Price&SortOrder=ascending");				}else{

							var scanned = productean + "";				
				var scanned2 = productean + "";
				scanned= "0" + productean;
 				scanned2 = productean.substr(1);						
 						//alert("EAN:" + scanned + " EAN:" + result.text);
 				ProdukteService.setProdukt("EAN:(" + scanned + " OR " + productean+" OR " + scanned2 +")");
					//alert("EAN:" + scanned + " EAN:" + result.text);
SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=EAN:(" + scanned + " OR " + productean +" OR " + scanned2 +")");
				}
				$state.go("app.preisvergleich");}
$scope.openlinkext = function (beschreibung, productid, productean) { 
			// Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Angebot öffnen</b> <i class="icon ion-ios7-redo-outline"></i>' }
	   //,       { text: 'Browser ' }
     ],
    destructiveText: 'Preisvergleich / Details',
     titleText: 'Angebot oder Preisvergleich öffnen',
	 cancelText: 'Abbrechen',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
				 

		 switch(index){
			 case 0:
			  					 window.open(beschreibung,'_blank','location=yes,EnableViewPortScale=yes');
								 break;
			 case 1:
			 					window.open(beschreibung,'_system','location=yes,EnableViewPortScale=yes');
								break;
			 };
       return true;
     },
      destructiveButtonClicked: function() {
if(productean == ""){
					SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/GetProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&ProductIds=" +productid);				}else{

							var scanned = productean + "";				
				var scanned2 = productean + "";
				scanned= "0" + productean;
 				scanned2 = productean.substr(1);						
 						//alert("EAN:" + scanned + " EAN:" + result.text);
 				ProdukteService.setProdukt("EAN:(" + scanned + " OR " + productean+" OR " + scanned2 +")");
					//alert("EAN:" + scanned + " EAN:" + result.text);
SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=EAN:(" + scanned + " OR " + productean +" OR " + scanned2+")");
				}
				$state.go("app.preisvergleich");
				
				
        return true;
      }
   });
					
 };		
 
		$scope.addtocart = function(name, discounter, ean,preis){
				  var cartitems = [    			{ 	itemname: name, 
				  									itemdiscounter: discounter, 	
													itemean: name,
													itempreis: preis
													}   
   								];
 				ShoppingCartService.pushCartitem(cartitems);
 				$ionicPopup.alert({
								 title: name + '',
								 template: 
								 '<p style="text-align:center;">wurde erfolgreich zu deiner Einkaufsliste hinzugefügt!</p>'
							   }); 				 
				  };		
				
				 
  })
  
  

.controller('getProduktCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup,$ionicActionSheet, ProdukteService, DiscounterService,ShoppingCartService, SuchService) {
		
 	  $scope.getPreis = function(suchenach){
 					  SuchService.setSuchbegriff(suchenach);
		$state.go("app.produktebysearch");}
		
							   	$ionicLoading.show();

  $scope.openlinkext = function (beschreibung) { 
  					 window.open('http://www.amazon.de/gp/search?ie=UTF8&camp=1638&creative=6742&index=aps&keywords=' + beschreibung  + '&linkCode=ur2&tag=wwwpsiconde-21','_blank','location=yes,EnableViewPortScale=yes');
 };
 
 
	$scope.openpreisvergleich = function (beschreibung, productid, productean) { 
			// Show the action sheet
			//alert('test' + beschreibung +" - " + productid +" - " + productean);
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Angebot öffnen</b> <i class="icon ion-ios7-redo-outline"></i>' }
	   //,       { text: 'Browser ' }
     ],
      titleText: 'Angebot oder Preisvergleich öffnen',
	 cancelText: 'Abbrechen',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
				 

		 switch(index){
			 case 0:
			  					 window.open(beschreibung,'_blank','location=yes,EnableViewPortScale=yes');
								 break;
			 case 1:
			 					window.open(beschreibung,'_system','location=yes,EnableViewPortScale=yes');
								break;
			 };
       return true;
     },
      destructiveButtonClicked: function() {
				if(productean == ""){
					 SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/GetProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&ProductIds=" +productid);				
					}else{
						
							var scanned = productean + "";				
				var scanned2 = productean + "";
				scanned= "0" + productean;
 				scanned2 = productean.substr(1);						
 						//alert("EAN:" + scanned + " EAN:" + result.text);
 				ProdukteService.setProdukt("EAN:(" + scanned + " OR " + productean+" OR " + scanned2 +")");
					//alert("EAN:" + scanned + " EAN:" + result.text);
 					SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=EAN:(" + scanned + " OR " + productean +" OR " + scanned2 +")");

				}
        return true;
      }
   });
		  
 };
 
 				var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getprodukte_byean.php?ean='" + ProdukteService.getProdukt() +"'",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	 						 $scope.Produkte = data;
							 console.log(data);
							 
							 var eanliste =  data[0].mpEAN;
							 if( data[0].mpEAN2 != ""){eanliste = eanliste + " OR " + data[0].mpEAN2};
							 if( data[0].mpEAN3 != ""){eanliste = eanliste + " OR " + data[0].mpEAN3};
							 if( data[0].mpEAN4 != ""){eanliste = eanliste + " OR " + data[0].mpEAN4};
							 if( data[0].mpEAN5 != ""){eanliste = eanliste + " OR " + data[0].mpEAN5};
					 
				var suchlink = "http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&query=EAN:(" + eanliste +")";
				suchlink = suchlink.replace("PageSize=4", "PageSize=40");
				var responsePromise = $http.get(suchlink ,{timeout:20000});
				
	 						 	$scope.onlineprodukte = "";
   								//$scope.myhtml='<i class="icon-left icon ion-loading-d" style="font-size:24px;" ></i><h3 >Suche in Datenbanken läuft...</h3>';
								$scope.eanvergleich = false;
								$scope.$apply();
                 responsePromise.success(function(data, status, headers, config) {
							 $ionicLoading.show();
							 $scope.onlineprodukte = data;
 							 responsePromise.then(function(response) {
								 
							 							 if(data.ProductsSummary.TotalRecords==0){
															 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:44px;" ><h3>Keine Suchergebnisse  gefunden</h3>';								 														 					   													$scope.showhtml = true;
													$ionicLoading.hide();
															 							$scope.$apply();

															  }
														 else{
														$scope.many =  data.ProductsSummary.TotalRecords;
 														$scope.showonlineangebote = true;
														$scope.showhtml = false;
														$ionicLoading.hide();
	   					   								$scope.myhtml="";}
													 
     						});
							

							
		                 });
						 
						 
						 
                 responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							 														 $scope.showhtml = true;

							 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:24px;" ><h3>Keine Antwort vom externen Server. Bitte später erneut versuchen!</h3>';
  							 
                });
				
$scope.openoffer = function (beschreibung) { 
			// Show the action sheet
						  					 window.open(beschreibung,'_blank','location=yes,EnableViewPortScale=yes');

//   var hideSheet = $ionicActionSheet.show({
//     buttons: [
//       { text: '<b>In-App </b> <i class="icon ion-ios7-redo-outline"></i>' },
//       { text: 'Browser ' }
//     ],
//      titleText: 'Wo Angebot öffnen?',
//	 cancelText: 'Abbrechen',
//     cancel: function() {
//          // add cancel code..
//        },
//     buttonClicked: function(index) {
//				 
//
//		 switch(index){
//			 case 0:
//			  					 window.open(beschreibung,'_blank','location=yes,EnableViewPortScale=yes');
//								 break;
//			 case 1:
//			 					window.open(beschreibung,'_system','location=yes,EnableViewPortScale=yes');
//								break;
//			 };
//       return true;
//     }
//     
//   });
//					
 };		
 
		$scope.addtocart = function(name, discounter, ean,preis){
				  var cartitems = [    			{ 	itemname: name, 
				  									itemdiscounter: discounter, 	
													itemean: name,
													itempreis: preis
													}   
   								];
 				ShoppingCartService.pushCartitem(cartitems);
 				$ionicPopup.alert({
								 title: name + '',
								 template: 
								 '<p style="text-align:center;">wurde erfolgreich zu deiner Einkaufsliste hinzugefügt!</p>'
							   }); 				 
				  };		
				
				 
  
							 $ionicLoading.hide();
		                
						 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
							   	$ionicLoading.hide();

                });
				
				 $scope.addtocart = function(name, discounter, ean,preis){
				  //alert('Trying to add: ' + name + ' d: ' + discounter + 'ean: ' + ean);
				  var cartitems = [    			{ 	itemname: name, 
				  									itemdiscounter: discounter, 	
													itemean: ean,
													itempreis: preis
													}   
   								];
 
 				$ionicPopup.alert({
								 title: name + '',
								 template: 
								 '<p style="text-align:center;">wurde erfolgreich zu deiner Einkaufsliste hinzugefügt!</p>'
							   }); 				 ShoppingCartService.pushCartitem(cartitems);
				  };
				  
			
 
  $scope.shareonfb = function(posting, img1, img2){

				
				var confirmPopup = $ionicPopup.confirm({
     title: '<h4 style="text-align:center;">Geheimnis veröffentlichen?</h4>',
     template: '<p style="text-align:center;">Möchtest du jetzt bei deinen Facebookfreunden mit diesem Geheimnis so richtig Eindruck schinden?</p>',
	 buttons: [
      { text: 'Später' },
      {
        text: '<b>JA, KLAR SOFORT!</b>',
        type: 'button-balanced',
		onTap: function(e) {
			openFB.login('email,publish_actions, public_profile',
            function() {
          openFB.api(
				{
					method: 'POST',
					path: '/me/feed',
					params: {
					message: posting+"",
					 link: 'http://www.psicon.de/markendetektive',
					 application: 'geposted mit der MarkenDetektive App - jetzt im Appstore',
					 icon: 'http://www.psicon.de/discountermarken/img/icon1616.png',
					 picture: img1
					},
					success: $ionicPopup.alert({
											 title: 'Erfolgreich',
											 template: 
											 '<p style="text-align:center;">Erfolgreich auf facebook gepostet!' +
											 '</br>Danke :)</p>'
										   })
				});},
            function(error) {
$ionicPopup.alert({
											 title: 'Fehler',
											 template: 
											 '<p style="text-align:center;">Konnte dich leider nicht bei facebook einloggen!'
										   });
										               });
        }}]
   });
   	 
	  };
  
 })

.controller('getmarkenprodukteCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService, ShoppingCartService) {
 
 $scope.addtocart = function(name, discounter, ean,preis){
				  //alert('Trying to add: ' + name + ' d: ' + discounter + 'ean: ' + ean);
				  var cartitems = [    			{ 	itemname: name, 
				  									itemdiscounter: discounter, 	
													itemean: ean,
													itempreis: preis
													}   
   								];
 
 				$ionicPopup.alert({
								 title: name + '',
								 template: 
								 '<p style="text-align:center;">wurde erfolgreich zu deiner Einkaufsliste hinzugefügt!</p>'
							   }); 				 ShoppingCartService.pushCartitem(cartitems);
				  };
 
 
  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getmarkenprodukte.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Produkte = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getProdukt = function(ean){
	  		ProdukteService.setProdukt(ean);
			$ionicLoading.show();
	    	$state.go("app.produkt");
	  };
				
				$scope.getprodukte_bymarke = function (task) { 
				 console.log("selected:" + task);
				 $scope.selectedProdukt = task+"";
				 ProdukteService.setProdukt(task);
				 
				 $ionicLoading.show();
	 
	 	 		$state.go("app.produkt");

	 };
	 
 
 
 })

.controller('getnotvalidatedCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService) {
 
 
  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getnotvalidated.php",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Produkte = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				$scope.getprodukte_bymarke = function (task) { 
				 console.log("selected:" + task);
				 $scope.selectedProdukt = task+"";
				 ProdukteService.setProdukt(task);
				 
				 $ionicLoading.show();
	 
	 	 		$state.go("app.produktnotvalidated");

	
	
 }; $scope.getProdukt = function(ean){
	  		ProdukteService.setProdukt(ean);
			$ionicLoading.show();
	    	$state.go("app.produktnotvalidated");
	  }
 
 
 $scope.upvote = function (mpean,dpean) { 
				
					var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/checkvalidation.php?uuid=" + device.uuid + "&mpean=" + mpean + "&dpean=" + dpean,{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
 	 						if(data.length==4){
								
								//--------------
								var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/vote.php?uuid=" + device.uuid + "&mpean=" + mpean + "&dpean=" + dpean + "&votevalue=1",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
 	 						
							$ionicPopup.alert({
								 title: 'Danke',
								 template: 
								 '<p style="text-align:center;">Danke fürs abstimmen. Deine Stimme wurde gezählt!</p>'
							   });
							$state.go('app.home');
							});
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
								//--------------
								}else{
										$ionicPopup.alert({
										title: 'FEHLER',
										template: 
										'<p style="text-align:center;">Für das Produkt hast du schon deine Stimme abgegeben!</p>'
							   		});
							   }
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				
				
						 };
						 
				$scope.downvote = function (mpean, dpean) { 
							var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/checkvalidation.php?uuid=" + device.uuid + "&mpean=" + mpean + "&dpean=" + dpean,{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
 	 						if(data.length==4){
								
								//--------------
								var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/vote.php?uuid=" + device.uuid + "&mpean=" + mpean + "&dpean=" + dpean + "&votevalue=-1",{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
 	 						
							$ionicPopup.alert({
								 title: 'Danke',
								 template: 
								 '<p style="text-align:center;">Danke fürs abstimmen. Deine Stimme wurde gezählt!</p>'
							   });
							$state.go('app.home');
							});
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
								//--------------
								}else{
										$ionicPopup.alert({
										title: 'FEHLER',
										template: 
										'<p style="text-align:center;">Für das Produkt hast du schon deine Stimme abgegeben!</p>'
							   		});
							   }
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				
				
						 }; 
  
 })



.controller('getnotvalidatedbyeanCtrl', function($scope, $http, $ionicLoading, $state,$ionicPopup, ProdukteService) {
 
  var responsePromise = $http.get("http://psicon.de/discountermarken/ionic/php/getnotvalidatedbyean.php?ean=" +ProdukteService.getProdukt(),{timeout:20000});

                responsePromise.success(function(data, status, headers, config) {
	
	 						 $scope.Produkte = data;
							 console.log(data);
							 $ionicLoading.hide();
		                 });
                responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Prüfe deine Internetverbindung!' +
								 '</br>Vielleicht hast du hier auch keinen Empfang.</p>'
							   });
                });
				
				
 
 
 
 })


.controller('getlastsearchCtrl', function($scope, $http, $ionicLoading, $state,  SuchService, ProdukteService) {
	var data = SuchService.getSearches();
  $scope.searches = data;
  $scope.searchprodukteclick = function(suche) {
	  //alert(suche);
	  //alert(suche.indexOf("EAN:"));

	  if(suche.indexOf("EAN:")!=-1){
	  var repl = suche.replace("EAN:","");
	  repl = repl.replace("EAN:","");
	  repl = repl.replace("EAN:","");
	  repl = repl.replace("EAN:","");
	  //alert(repl);
	  SuchService.setSuchbegriffdetektive(repl);

	  //alert(repl);
 					var repl2= "0" + repl ;
					
					var	repl3 = repl.substr(1);						
 									 suche = "EAN:(" + repl + " OR " + repl3 +" OR " + repl2 +")";
									 				//alert(suche);
	if(suche==""){$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Bitte gebe mir einen Suchbegriff!' 
							   });
							   
							   
							   }else{
		$ionicLoading.show();
    	//$scope.modal.hide();
		//alert("Starte Suche nach: " + suche);
		console.log($state.current.name);
		SuchService.setSuchbegriffdetektive(suche);
		SuchService.setSuchbegriff(suche);
		SuchService.setIDorEAN("http://product-api.affili.net/V3/productservice.svc/json/SearchProducts?publisherid=708669&password=xg5I8J6vCNRNpY2y6pkm&PageSize=4&ImageScales=Image180&LogoScales=Logo120" + ProdukteService.getShops() + "&SortBy=Price&SortOrder=ascending&query=" + suche);
		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: suche.nach, 
				  									Datum: today
													}   
   								];
								
 		$state.go("app.preisvergleich");
		if($state.current.name == "app.preisvergleich")
		{
			$state.transitionTo($state.current, $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});
		}
}
  
									 
	
	  }else{				//alert("EAN:" + scanned + " EAN:" + result.text);
	if(suche==""){$ionicPopup.alert({
								 title: 'FEHLER',
								 template: 
								 '<p style="text-align:center;">Bitte gebe mir einen Suchbegriff!' 
							   });}else{
		$ionicLoading.show();
    	//$scope.modal.hide();
		//alert("Starte Suche nach: " + suche);
		console.log($state.current.name);
		SuchService.setSuchbegriff(suche);
		SuchService.setSuchbegriffdetektive(suche);

		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'.'+mm+'.'+yyyy;
		 var sucharray = [    			{ 	Bezeichnung: suche.nach, 
				  									Datum: today
													}   
   								];
 		$state.go("app.produktebysearch");
		if($state.current.name == "app.produktebysearch")
		{
			$state.transitionTo($state.current, $stateParams, {
				reload: true,
				inherit: false,
				notify: true
			});
		}
}
  }
	};
  //alert(data);
 })
.controller('getController', function($scope, $http, $ionicLoading, $state, LetterService, KontrollnummerntypService) {
$scope.Typen = [    	{ Bez: 'Molkereibetriebe', Typ: 1},    
						{ Bez: 'Fleischereibetriebe', Typ:2},    
						{ Bez: 'Fischereibetriebe', Typ:3}    
									]
									
$scope.letters = [
    { letter: 'A'},    { letter: 'B'},    { letter: 'C'},    { letter: 'D'},    { letter: 'E'},
    { letter: 'F'},    { letter: 'G'},    { letter: 'H'},    { letter: 'I'},    { letter: 'J'},
    { letter: 'K'},    { letter: 'L'},    { letter: 'M'},    { letter: 'N'},    { letter: 'O'},
    { letter: 'P'},    { letter: 'Q'},    { letter: 'R'},    { letter: 'S'},    { letter: 'T'},
    { letter: 'U'},    { letter: 'V'},    { letter: 'W'},    { letter: 'X'},    { letter: 'Y'},
    { letter: 'Z'},  ];


  $scope.getHandelsmarken = function (task) { 
		
	 $scope.selectedletter = task+"";
	 LetterService.setLetter(task.letter[0]+"");
	 
	 $ionicLoading.show();
	 
	 	 $state.go("app.handelsmarkeletter");

	
 };
 
  $scope.getKontrollnummern = function (task) { 
 	 $scope.selectedtyp = task+"";
	 KontrollnummerntypService.setTyp(task+"");
	 
	 $ionicLoading.show();
	 
	 $state.go("app.kontrollnummern");

	
 };
 
 
})

  


.controller('preisvergleichCtrl', function($scope,$ionicActionSheet, $location, $window, $http, $ionicLoading, $state,$ionicPopup, ShoppingCartService,$ionicModal, ProdukteService, SuchService) {
   							   	$ionicLoading.show();
							//alert(SuchService.getIDorEAN());
							
				var suchlink = SuchService.getIDorEAN();

				suchlink = suchlink.replace("PageSize=4", "PageSize=40");
								//alert(suchlink);
				var responsePromise = $http.get(suchlink ,{timeout:20000});
				
				
	 						 	$scope.produkte = "";
   								//$scope.myhtml='<i class="icon-left icon ion-loading-d" style="font-size:24px;" ></i><h3 >Suche in Datenbanken läuft...</h3>';
								$scope.eanvergleich = false;
								$scope.$apply();
                 responsePromise.success(function(data, status, headers, config) {
							 $ionicLoading.show();
							 $scope.produkte = data;
 							 responsePromise.then(function(response) {
							 							 if(data.ProductsSummary.TotalRecords==0){
													$ionicLoading.hide();
															 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:44px;" ><h3>Keine Suchergebnisse gefunden</h3>';
															 								$scope.$apply();
															 							 														 					   													$scope.showhtml = true;

															  }
														 else{
														$scope.many =  data.ProductsSummary.TotalRecords;
 														$scope.eanvergleich = true;
														$scope.showhtml = false;
														$ionicLoading.hide();
	   					   								$scope.myhtml="";}
													 								$scope.$apply();

     						});
							

							
		                 });
						 
						 
						 
                 responsePromise.error(function(data, status, headers, config) {
							 $ionicLoading.hide();
							 														 $scope.showhtml = true;

							 $scope.myhtml = '<i class="icon-left icon ion-alert-circled" style="font-size:24px;" ><h3>Keine Antwort vom externen Server. Bitte später erneut versuchen!</h3>';
  							 
                });
				
$scope.openoffer = function (beschreibung) { 
			// Show the action sheet
						  					 window.open(beschreibung,'_blank','location=yes,EnableViewPortScale=yes');

   //var hideSheet = $ionicActionSheet.show({
//     buttons: [
//       { text: '<b>In-App</b> <i class="icon ion-ios7-redo-outline"></i>' },
//       { text: 'Browser ' }
//     ],
//      titleText: 'Wo Angebot öffnen?',
//	 cancelText: 'Abbrechen',
//     cancel: function() {
//          // add cancel code..
//        },
//     buttonClicked: function(index) {
//				 
//
//		 switch(index){
//			 case 0:
//			  					 window.open(beschreibung,'_blank','location=yes,EnableViewPortScale=yes');
//								 break;
//			 case 1:
//			 					window.open(beschreibung,'_system','location=yes,EnableViewPortScale=yes');
//								break;
//			 };
//       return true;
//     }
//     
//   });
//					
 };	
 
 	
 $scope.openamazon = function (beschreibung) { 
			// Show the action sheet
			//alert(beschreibung);
 window.open('http://www.amazon.de/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&camp=1638&creative=6742&index=aps&keywords='+beschreibung+'&linkCode=ur2&tag=wwwpsiconde-21&linkId=3C5FOUUT725O43A2','_blank','location=yes,EnableViewPortScale=yes');				
 };	
 
 $scope.openebay = function (beschreibung) { 
			// Show the action sheet
			//alert(beschreibung);
			 window.open('http://rover.ebay.com/rover/1/707-53477-19255-0/1?icep_ff3=9&pub=5575099216&toolid=10001&campid=5337568360&customid=&icep_uq='+beschreibung+'&icep_sellerId=&icep_ex_kw=&icep_sortBy=12&icep_catId=&icep_minPrice=&icep_maxPrice=&ipn=psmain&icep_vectorid=229487&kwid=902099&mtid=824&kw=lg','_blank','location=yes,EnableViewPortScale=yes');
					
 };		
 
		$scope.addtocart = function(name, discounter, ean,preis){
				  var cartitems = [    			{ 	itemname: name, 
				  									itemdiscounter: discounter, 	
													itemean: name,
													itempreis: preis
													}   
   								];
 				ShoppingCartService.pushCartitem(cartitems);
 				$ionicPopup.alert({
								 title: name + '',
								 template: 
								 '<p style="text-align:center;">wurde erfolgreich zu deiner Einkaufsliste hinzugefügt!</p>'
							   }); 				 
				  };		
				
				 
  })




;