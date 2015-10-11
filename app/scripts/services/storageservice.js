'use strict';

/**
 * @ngdoc service
 * @name billetApp.StorageService
 * @description
 * # StorageService
 * Service in the billetApp.
 */
angular.module('billetApp')
  .service('StorageService', function (localStorageService) {

    var CURRENT_LIST = 'currentList';
    var LISTS = 'lists';

	  return {
		 getLists : function() {
       return localStorageService.get(LISTS);
		 },
     saveList : function(id, name) {
       var lists = this.getLists();
       if (!lists) {
         lists = [];
       }
       lists.push({'id' : id, 'name' : name});
       localStorageService.set(LISTS, lists);
     },
     getCurrentList : function() {
       return localStorageService.get(CURRENT_LIST);
     },
     setCurrentList : function(id, name) {
       localStorageService.set(CURRENT_LIST, {'id' : id, 'name' : name});
     }
	  }
  });