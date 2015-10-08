'use strict';

/**
 * @ngdoc service
 * @name billetApp.StorageService
 * @description
 * # StorageService
 * Service in the billetApp.
 */
angular.module('billetApp')
  .service('StorageService', function () {
	  
	  return {
		  
		 test : function() {
			 console.log("service test");
		 } 
		  
	  }  
  });
