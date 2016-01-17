'use strict';

/**
 * @ngdoc function
 * @name billetApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the billetApp
 */
angular.module('billetApp')
  .controller('MenuCtrl', ['$scope', '$location', '$mdDialog', '$mdToast', function ($scope, $location, $mdDialog, $mdToast) {

    $scope.changeList = function() {
      $location.path('/lists');
    }

    $scope.choosingList = function() {
      return $location.path() == '/lists';
    }

    $scope.shareList = function() {
      $mdDialog.show({
        templateUrl: 'views/dialog-share-list.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        escapeToClose: true,
        controller: function ($scope, $mdDialog, $location) {
          $scope.url = $location.absUrl();
          $scope.confirmDialog = function () {
            $mdDialog.hide();
          }
          $scope.copyUrl = function() {
            $mdToast.show(
              $mdToast.simple()
                .textContent('Le lien vers le billet a été copié dans le presse-papier')
                .position('bottom left')
            );
            $mdDialog.hide();
          }
        }
      });
    }

  }]);
