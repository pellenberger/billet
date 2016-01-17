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

    // TODO display loading icon while loading list stuff

    FirebaseService.existingList(listId).then(function (existing) {
      if (existing) {
        FirebaseService.getList(listId).then(function (list) {
          $scope.listName = list.name;

          FirebaseService.getItems(listId).then(function(items) {
            $scope.items = items;
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
    }

    $scope.checkingDone = function() {
      for (var i = 0; i < $scope.items.length; i ++) {
        if ($scope.items[i].checked) {
          FirebaseService.removeItem($scope.items[i]);
        }
      }
    }

  }]);
