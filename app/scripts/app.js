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

  })
  .run(function (FirebaseService, StorageService) {


  });
