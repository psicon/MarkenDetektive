// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	
	openFB.init('438754772893763'); // Defaults to sessionStorage for storing the Facebook token

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
		        controller: 'AppCtrl'

        }
      }
    })

    .state('app.handelsmarken', {
      url: "/handelsmarken",
      views: {
        'menuContent' :{
          templateUrl: "templates/handelsmarken.html",
		   controller: 'getController'
        }
      }
    })
	
	
	
	.state('app.handelsmarkeletter', {
      url: "/handelsmarkeletter",
      views: {
        'menuContent' :{
          templateUrl: "templates/handelsmarkeletter.html",
		   controller: 'getController'
        }
      }
    })
	
	.state('app.preisvergleich', {
      url: "/preisvergleich",
      views: {
        'menuContent' :{
          templateUrl: "templates/preisvergleich.html",
		   controller: 'preisvergleichCtrl'
        }
      }
    })
	
	
	.state('app.produktebydiscounter', {
      url: "/produktebydiscounter",
      views: {
        'menuContent' :{
          templateUrl: "templates/produktebydiscounter.html",
		   controller: 'getProduktebydiscounterCtrl'
        }
      }
    })
	
	.state('app.produktebykategorie', {
      url: "/produktebykategorie",
      views: {
        'menuContent' :{
          templateUrl: "templates/produktebykategorie.html",
		   controller: 'getProduktebykategorieCtrl'
        }
      }
    })
	
	.state('app.neuesteprodukte', {
      url: "/neuesteprodukte",
      views: {
        'menuContent' :{
          templateUrl: "templates/neuesteprodukte.html",
		   controller: 'getNeuesteprodukteCtrl'
        }
      }
    })
	
	.state('app.suche', {
      url: "/suche",
      views: {
        'menuContent' :{
          templateUrl: "templates/suche.html",
		   controller: 'AppCtrl'
        }
      }
    })
	
	.state('app.produktebysearch', {
      url: "/produktebysearch",
      views: {
        'menuContent' :{
          templateUrl: "templates/produktebysearch.html",
		   controller: 'getProduktebysearchexternCtrl'
        }
      }
    })
	
	.state('app.markenprodukte', {
      url: "/markenprodukte",
      views: {
        'menuContent' :{
          templateUrl: "templates/markenprodukte.html",
		   controller: 'getmarkenprodukteCtrl'
        }
      }
    })	
	
	.state('app.produkt', {
      url: "/produkt",
      views: {
        'menuContent' :{
          templateUrl: "templates/produkt.html",
		   controller: 'getProduktCtrl'
        }
      }
    })
	
	.state('app.produktnotvalidated', {
      url: "/produktnotvalidated",
      views: {
        'menuContent' :{
          templateUrl: "templates/produktnotvalidated.html",
		   controller: 'getnotvalidatedCtrl'
        }
      }
    })
	
	.state('app.kontrollnummern', {
      url: "/kontrollnummern",
      views: {
        'menuContent' :{
          templateUrl: "templates/kontrollnummern.html",
		   controller: 'getKontrollnummernCtrl'
        }
      }
    })
	
	.state('app.kontrollnummernauswahl', {
      url: "/kontrollnummernauswahl",
      views: {
        'menuContent' :{
          templateUrl: "templates/kontrollnummernauswahl.html",
		   controller: 'getController'
        }
      }
    })
	
	
	.state('app.discounter', {
      url: "/discounter",
      views: {
        'menuContent' :{
          templateUrl: "templates/discounter.html"
        }
      }
    })
	
    .state('app.kategorieauswahl', {
      url: "/kategorieauswahl",
      views: {
        'menuContent' :{
          templateUrl: "templates/kategorieauswahl.html",
          controller: 'getkategorieCtrl'
        }
      }
    })
	
	.state('app.wizard0', {
      url: "/wizard0",
      views: {
        'menuContent' :{
          templateUrl: "templates/wizard0.html",
          controller: 'wizardCtrl'
        }
      }
    })
	
	  .state('app.impressum', {
      url: "/impressum",
      views: {
        'menuContent' :{
          templateUrl: "templates/impressum.html"
		          }
      }
    })

  .state('app.infos', {
      url: "/infos",
      views: {
        'menuContent' :{
          templateUrl: "templates/infos.html"
		          }
      }
    })
	
	.state('app.notvalidated', {
      url: "/notvalidated",
      views: {
        'menuContent' :{
          templateUrl: "templates/notvalidated.html",
		            controller: 'getnotvalidatedCtrl'

		          }
      }
    })
	
	.state('app.shoppingcart', {
      url: "/shoppingcart",
      views: {
        'menuContent' :{
          templateUrl: "templates/shoppingcart.html",
		            controller: 'ShoppingCartCtrl'

		          }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

