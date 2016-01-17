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
    'firebase',
    'LocalStorageModule',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
    })
    .when('/lists', {
        templateUrl: 'views/lists.html',
        controller: 'ListsCtrl',
        controllerAs: 'lists'
    })
    .when('/lists/:listId', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'list'
    })
    .otherwise({
      redirectTo: function() {
        window.location = "/404.html";
      }
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink')
      .warnPalette('red')
  })
  .run(function () {

  });
