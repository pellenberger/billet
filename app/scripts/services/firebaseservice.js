'use strict';

/**
 * @ngdoc service
 * @name billetApp.FirebaseService
 * @description # FirebaseService Service in the billetApp.
 */
angular.module('billetApp').service('FirebaseService', function($firebaseArray, $q) {

	var listsRef = new Firebase("https://billet.firebaseio.com/lists");
	var authToken = "Z5FWNA4t2jzM0Nq1R8RuknZbay3nheavChIhxlwU";

  connect(listsRef);

  var lists = $firebaseArray(listsRef);
  var items;

	return {
		createList: function(name) {
      return lists.$add({
        'name' : name,
        'timestamp' : Firebase.ServerValue.TIMESTAMP
      });
		},
    getList: function(listId) {
      var defer = $q.defer();
      lists.$loaded(function() {
        defer.resolve(lists.$getRecord(listId));
      });
      return defer.promise;
    },
    existingList: function(listId) {
      var defer = $q.defer();
      lists.$loaded(function() {
        defer.resolve(lists.$indexFor(listId) != -1);
      });
      return defer.promise;
    },
    getItems: function(listId) {
      var itemsRef = new Firebase("https://billet.firebaseio.com/lists/" + listId + "/items");
      items = $firebaseArray(itemsRef);
      var defer = $q.defer();
      items.$loaded(function() {
        defer.resolve(items);
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

  function connect(ref) {
    ref.authWithCustomToken(authToken, function(error) {
      if (error) {
        // TODO error handling
        console.log("Login Failed!", error);
      }
    });
  }

});
