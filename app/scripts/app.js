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
  .config(function ($routeProvider) {
    $routeProvider
    .when('/:listId', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl',
      controllerAs: 'list'
    })
    .otherwise({
      redirectTo: '/'
    });
  })
  .run(function (FirebaseService, StorageService) {

  });
