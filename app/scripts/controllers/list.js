'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('ListCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.listId = $routeParams.listId;

    //console.log("controller list");
    //
    //var listId = $routeParams.listId;
    //
    //// TODO redirect to / when list does not exist (after showing dialog)
    //
    //FirebaseService.getItems(listId).then(function(items) {
    //  $scope.items = items;
    //});
    //
    //$scope.addItem = function() {
    //  FirebaseService.addItem($scope.description);
    //}

  }]);
