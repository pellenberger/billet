'use strict';

/**
 * @ngdoc service
 * @name billetApp.FirebaseService
 * @description # FirebaseService Service in the billetApp.
 */
angular.module('billetApp').service('FirebaseService', function() {
	
	var ref = new Firebase("https://billet.firebaseio.com/lists");	
	var authToken = "Z5FWNA4t2jzM0Nq1R8RuknZbay3nheavChIhxlwU";

	return {
		connect: function(){			
			ref.authWithCustomToken(authToken, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Login Succeeded!", authData);
			  }
			});			
		},
		createList: function(name) {
			ref.push({
				'name' : name
			}, function(error){
				if (error) {
					console.log("Create list failed : " + error);
				}
				else {
					console.log("Create list succeeded");
				}
			});
		}
	};

});
