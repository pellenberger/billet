'use strict';

/**
 * @ngdoc service
 * @name billetApp.StorageService
 * @description
 * # StorageService
 * Service in the billetApp.
 * Stores lists as objects with format {id, name} in browser local storage
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
     },

     findListById : function(id) {
       var lists = this.getLists();
       if (!lists)
         return undefined;
       for (var i = 0; i < lists.length; i ++) {
         if (lists[i].id == id) {
           return lists[i];
         }
       }
     },

     deleteList : function(id) {
       var lists = [];
       var oldLists = this.getLists();
       for (var i = 0; i < oldLists.length; i ++) {
         if (oldLists[i].id != id) {
           lists.push(oldLists[i])
         }
       }
       localStorageService.set(LISTS, lists);
       localStorageService.remove(CURRENT_LIST);
     }
	  }
  });
