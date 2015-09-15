'use strict';

describe('Service: sphereFactory', function () {

  // load the service's module
  beforeEach(module('webunleashedExampleApp'));

  // instantiate service
  var sphereFactory;
  beforeEach(inject(function (_sphereFactory_) {
    sphereFactory = _sphereFactory_;
  }));

  it('should do something', function () {
    expect(!!sphereFactory).toBe(true);
  });

});
