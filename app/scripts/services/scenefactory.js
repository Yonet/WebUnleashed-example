'use strict';

/**
 * @ngdoc service
 * @name webunleashedExampleApp.sceneFactory
 * @description
 * # sceneFactory
 * Factory in the webunleashedExampleApp.
 */
angular.module('webunleashedExampleApp')
  .factory('sceneFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
