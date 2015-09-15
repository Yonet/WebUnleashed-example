'use strict';

/**
 * @ngdoc service
 * @name webunleashedExampleApp.sphereFactory
 * @description
 * # sphereFactory
 * Factory in the webunleashedExampleApp.
 */
angular.module('webunleashedExampleApp')
  .factory('sphereFactory', function () {
    // Service logic
    // ...

    var createSphere = function(color){
      var color = color || 0x00ff00;

      //Cube geometry
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );

        //Basic material
        var material = new THREE.MeshBasicMaterial( { color: color } );

        //Mesh
        var cube = new THREE.Mesh( geometry, material );
      // var sphere
      return cube;
    }

    // Public API here
    return {
      createSphere: createSphere
    };
  });
