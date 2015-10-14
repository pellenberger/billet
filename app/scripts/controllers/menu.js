'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('MenuCtrl', ['$scope', 'StorageService', function ($scope, StorageService) {

    $scope.lists = StorageService.getLists();
    $scope.currentListId = StorageService.getCurrentList().id;

    $scope.currentListChanged = function () {
      var list = StorageService.findListById($scope.currentListId);
      StorageService.setCurrentList(list.id, list.name);
    };

  }]);
