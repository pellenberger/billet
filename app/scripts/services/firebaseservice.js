'use strict';

/**
 * @ngdoc service
 * @name billetApp.FirebaseService
 * @description # FirebaseService Service in the billetApp.
 */
angular.module('billetApp').service('FirebaseService', function($firebaseArray) {

	var listsRef = new Firebase("https://billet.firebaseio.com/lists");
	var authToken = "Z5FWNA4t2jzM0Nq1R8RuknZbay3nheavChIhxlwU";

  connect();

  var lists = $firebaseArray(listsRef);

  function connect() {
    listsRef.authWithCustomToken(authToken, function(error) {
      if (error) {
        // TODO error handling
        console.log("Login Failed!", error);
      }
    });
  }

	return {
		createList: function(name) {
      return lists.$add({
        'name' : name,
        'timestamp' : Firebase.ServerValue.TIMESTAMP
      });
		},
    getLists: function() {
      return lists;
    }
	};

});
