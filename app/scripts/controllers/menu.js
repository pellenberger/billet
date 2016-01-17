'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.changeList = function() {
      $location.path('/lists');
    }

    $scope.choosingList = function() {
      return $location.path() == '/lists';
    }

  }]);
