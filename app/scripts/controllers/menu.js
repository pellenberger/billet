'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('MenuCtrl', ['$scope', '$mdDialog', '$location', 'StorageService', 'FirebaseService', function ($scope, $mdDialog, $location, StorageService, FirebaseService, $routeParams) {

    console.log("controller menu");

    $scope.currentListChanged = function () {
      var list = StorageService.findListById($scope.currentListId);
      StorageService.setCurrentList(list.id, list.name);
      changePath(list.id);
    };

    $scope.showNewListDialog = function (firstList) {
      $mdDialog.show({
        templateUrl: 'views/dialog-new-list.html',
        parent: angular.element(document.body),
        clickOutsideToClose: !firstList,
        escapeToClose: !firstList,
        controller: function ($scope, $mdDialog) {
          $scope.firstList = firstList;
          $scope.listName = "";
          $scope.closeDialog = function ()  {
            $mdDialog.cancel();
          },
          $scope.confirmDialog = function () {
            $mdDialog.hide($scope.listName);
          }
        }
      }).then(function (listName) {
        createList(listName);
      });
    };

    function createList (listName) {
      FirebaseService.createList(listName).then(function (ref) {
        var id = ref.key();
        StorageService.saveList(id, listName);
        $scope.lists = StorageService.getLists();
        StorageService.setCurrentList(id, listName);
        $scope.currentListId = id;
        changePath(id);
      });
    }

    function changePath(id) {
      $location.path("/" + id);
    }

    var lists = StorageService.getLists();

    if (lists) {
      $scope.lists = lists;
      var currentList = StorageService.getCurrentList();
      if (currentList) {
        $scope.currentListId = currentList.id;
      }
      else {
        $scope.currentListId = lists[0].id;
      }
      changePath($scope.currentListId);
    }
    else {
      $scope.showNewListDialog(true);
    }

  }]);
