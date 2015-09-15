'use strict';

describe('Directive: globe', function () {

  // load the directive's module
  beforeEach(module('webunleashedExampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<globe></globe>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the globe directive');
  }));
});
