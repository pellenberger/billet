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

    FirebaseService.getItems(listId).then(function(items) {
      $scope.items = items;
    });

    $scope.addItem = function() {
      FirebaseService.addItem($scope.description);
    }

  }]);
