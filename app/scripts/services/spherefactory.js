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

		var createSphere = function(radius) {
			var radius = radius || 5;
			console.log('r', radius)

			var globeGeometry = new THREE.SphereGeometry(1, 32, 16);
			var globeMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00} );//new THREE.MeshPhongMaterial();

			// globeMaterial.map = THREE.ImageUtils.loadTexture('/images/globe/earthmap4k.jpg');
			var globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
			console.log(globeMesh);
			return globeMesh;
		}

		// Public API here
		return {
			createSphere: createSphere,
			createCube: createCube
		};
	});
