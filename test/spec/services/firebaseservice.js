'use strict';

describe('Service: $firebaseArray', function () {

  // load the service's module
  beforeEach(module('billetApp'));

  // instantiate service
  var $firebaseArray;
  beforeEach(inject(function (_$firebaseArray_) {
    $firebaseArray = _$firebaseArray_;
  }));

  it('should do something', function () {
    expect(!!$firebaseArray).toBe(true);
  });

});
