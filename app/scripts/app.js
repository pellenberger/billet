'use strict';

/**
 * @ngdoc overview
 * @name billetApp
 * @description
 * # billetApp
 *
 * Main module of the application.
 */
angular
  .module('billetApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'firebase'   
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (FirebaseService) {	  
	  
	  FirebaseService.connect();	
	  FirebaseService.createList("test");
	  
  });
