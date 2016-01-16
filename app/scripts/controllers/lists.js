'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('ListsCtrl', ['$scope', '$location', 'StorageService', function ($scope, $location, StorageService) {

    $scope.currentList = StorageService.getCurrentList();
    $scope.localLists = StorageService.getLists();

    $scope.currentListChanged = function() {
      var newCurrentList = StorageService.findListById($scope.currentList.id);
      StorageService.setCurrentList(newCurrentList.id, newCurrentList.name);
      $location.path('/lists/' + newCurrentList.id);
    }

  }]);
