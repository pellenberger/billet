'use strict';

/**
 * @ngdoc service
 * @name billetApp.FirebaseService
 * @description # FirebaseService Service in the billetApp.
 */
angular.module('billetApp').service('FirebaseService', function() {
	
	var ref = new Firebase("https://billet.firebaseio.com/");
	console.log(ref);

	return {
		connect: function(){
			console.log("connect");
		}
	};

});
