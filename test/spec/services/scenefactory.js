'use strict';

describe('Service: sceneFactory', function () {

  // load the service's module
  beforeEach(module('webunleashedExampleApp'));

  // instantiate service
  var sceneFactory;
  beforeEach(inject(function (_sceneFactory_) {
    sceneFactory = _sceneFactory_;
  }));

  it('should do something', function () {
    expect(!!sceneFactory).toBe(true);
  });

});
