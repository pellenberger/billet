'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('ListsCtrl', ['$scope', '$location', '$mdDialog', 'StorageService', 'FirebaseService', function ($scope, $location, $mdDialog, StorageService, FirebaseService) {

    $scope.currentList = StorageService.getCurrentList();
    $scope.localLists = StorageService.getLists();

    if (!$scope.localLists || $scope.localLists.length == 0) {
      newList(true);
    }

    $scope.currentListChanged = function() {
      var newCurrentList = StorageService.findListById($scope.currentList.id);
      StorageService.setCurrentList(newCurrentList.id, newCurrentList.name);
      $location.path('/lists/' + newCurrentList.id);
    }

    $scope.showNewListDialog = function () {
      newList(false);
    }

    function newList(firstList) {
      $mdDialog.show({
        templateUrl: 'views/dialog-new-list.html',
        parent: angular.element(document.body),
        clickOutsideToClose: !firstList,
        escapeToClose: !firstList,
        controller: function ($scope, $mdDialog) {
          $scope.firstList = firstList;
          $scope.listName = '';
          $scope.closeDialog = function () {
            $mdDialog.cancel();
          },
            $scope.confirmDialog = function () {
              $mdDialog.hide($scope.listName);
            }
        }
      }).then(function (listName) {
        createList(listName);
      });
    }

    function createList(listName) {
      FirebaseService.createList(listName).then(function (ref) {
        var id = ref.key();
        StorageService.saveList(id, listName);
        StorageService.setCurrentList(id, listName);
        $location.path('/lists/' + id);
      });
    }

  }]);
