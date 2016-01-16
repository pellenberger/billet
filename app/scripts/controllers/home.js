'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('HomeCtrl', ['$scope', '$location', 'StorageService', function ($scope, $location, StorageService) {

    var currentList = StorageService.getCurrentList();
    if (currentList) {
      $location.path("lists/" + currentList.id);
    }
    else {
      $scope.currentList = "There is no current list";
    }

  }]);
