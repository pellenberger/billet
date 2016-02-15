'use strict';

/**
 * @ngdoc service
 * @name billetApp.FirebaseService
 * @description # FirebaseService Service in the billetApp.
 */
angular.module('billetApp').service('FirebaseService', function($firebaseArray, $firebaseObject, $q, $mdDialog) {

  var baseUri = "https://billet.firebaseio.com/lists/";
  var items;

	return {
		createList: function(name) {
      return $firebaseArray(new Firebase(baseUri)).$add({
        'name' : name,
        'timestamp' : Firebase.ServerValue.TIMESTAMP
      })
		},
    // precondition : listId has been tested using function existingList()
    getList: function(listId) {
      var defer = $q.defer();
      var list = $firebaseObject(new Firebase(baseUri + listId))
      list.$loaded(function() {
        defer.resolve(list);
      }, function(error) {
        displayErrorToast(error);
      });
      return defer.promise;
    },
    existingList: function(listId) {
      var defer = $q.defer();
      var list = $firebaseObject(new Firebase(baseUri + "" + listId))
      list.$loaded(function() {
        defer.resolve(list.name != undefined);
      }, function(error) {
        displayErrorToast(error)
      });
      return defer.promise;
    },
    getItems: function(listId) {
      var defer = $q.defer();
      items = $firebaseArray(new Firebase(baseUri + listId + "/items"))
      items.$loaded(function() {
        defer.resolve(items);
        }, function(error) {
        displayErrorToast(error);
      });
      return defer.promise;
    },
    addItem: function(description) {
      items.$add({
        'description' : description,
        'checked' : false,
        'timestamp' : Firebase.ServerValue.TIMESTAMP
      });
    },
    removeItem: function(item) {
      items.$remove(item);
    }
	};

  function displayErrorToast(error) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .clickOutsideToClose(true)
        .title('Erreur')
        .textContent('Une erreur est survenue lors de la connexion au service Firebase : ' + error)
        .ok('Ok')
    );
  }

});
