'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('ListCtrl', ['$scope', '$routeParams', '$mdToast', 'FirebaseService', 'StorageService', function ($scope, $routeParams, $mdToast, FirebaseService, StorageService) {

    var listId = $routeParams.listId;
    $scope.description = '';
    $scope.noCheckedItem = true;
    $scope.loading = true;

    FirebaseService.existingList(listId).then(function (existing) {
      if (existing) {
        FirebaseService.getList(listId).then(function (list) {
          $scope.listName = list.name;

          if (!StorageService.findListById(listId)) {
            StorageService.saveList(listId, list.name);
          }
          StorageService.setCurrentList(listId, list.name);

          FirebaseService.getItems(listId).then(function(items) {
            $scope.items = items;
            $scope.loading = false;
          });
        });
      }
      else {
        StorageService.deleteList(listId);
        window.location = "/404.html";
      }
    });

    $scope.addItem = function() {
      FirebaseService.addItem($scope.description);
      $scope.description = '';
    }

    $scope.checkingDone = function() {
      var checkedItems = getCheckedItems();
      for (var i = 0; i < checkedItems.length; i ++) {
        if (checkedItems[i].checked) {
          FirebaseService.removeItem(checkedItems[i]);
        }
      }
      $scope.noCheckedItem = true;
      $mdToast.show(
        $mdToast.simple()
          .textContent('Les articles sélectionnés ont été retirés de la liste')
          .position('bottom left')
      );
    }

    $scope.itemStatusChanged = function() {
      $scope.noCheckedItem = getCheckedItems().length == 0;
    }

    function getCheckedItems() {
      var items = [];
      for (var i = 0; i < $scope.items.length; i ++) {
        if ($scope.items[i].checked) {
          items.push($scope.items[i]);
        }
      }
      return items;
    }

  }]);
