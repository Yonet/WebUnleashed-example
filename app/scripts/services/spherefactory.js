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



		var createCube = function(color){
			var color = color || 0x00ff00;

			//Cube geometry
				var geometry = new THREE.BoxGeometry( 1, 1, 1 );

				//Basic material
				var material = new THREE.MeshBasicMaterial( { color: color } );

				//Mesh
				var cube = new THREE.Mesh( geometry, material );

				return cube;

		}

		var map;
		var mapUrl = "../images/earth_atmos_2048.jpg";

		var createSphere = function(radius) {
			var radius = radius || 1;

			//Geometry
			var globeGeometry = new THREE.SphereGeometry(radius, 32, 16);

			//Create the texture map
			map = THREE.ImageUtils.loadTexture(mapUrl);
			var globeMaterial = new THREE.MeshPhongMaterial({ map: map });

			var globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);

			return globeMesh;
		}

		// Public API here
		return {
			createSphere: createSphere,
			createCube: createCube
		};
	});
