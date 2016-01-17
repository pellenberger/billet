'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('ListCtrl', ['$scope', '$routeParams', 'FirebaseService', function ($scope, $routeParams, FirebaseService) {

    var listId = $routeParams.listId;
    $scope.description = '';
    $scope.noCheckedItem = true;
    $scope.loading = true;

    // TODO store list in local storage if not already

    FirebaseService.existingList(listId).then(function (existing) {
      if (existing) {
        FirebaseService.getList(listId).then(function (list) {
          $scope.listName = list.name;

          FirebaseService.getItems(listId).then(function(items) {
            $scope.items = items;
            $scope.loading = false;
          });
        });
      }
      else {
        // TODO handle non existing list
        console.log('non existing list');
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
