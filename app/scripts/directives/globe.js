'use strict';

/**
 * @ngdoc directive
 * @name webunleashedExampleApp.directive:globe
 * @description
 * # globe
 */
angular.module('webunleashedExampleApp')
	.directive('globe', ['sphereFactory',function (sphereFactory) {
		return {
			restrict: 'E',
			scope: {
				width:"=width", // bindings
				height:  '@height', // static value
				color: '&color'    // expression
			},
			link: function postLink(scope, element, attrs) {
				//Three.js code goes here...

				//Set the width and height from the parent element width
				var width = attrs.width || element[0].parentNode.clientWidth;
				var height = width * 2/3;

				//Scene
				var scene = new THREE.Scene();

				//Camera
				var camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );

				// Renderer
				var renderer = new THREE.WebGLRenderer();
				renderer.setSize(width, height );

				//Add the renderer to the DOM
				element[0].appendChild( renderer.domElement );

				var light = new THREE.DirectionalLight( 0xffffff, 2);
				light.position.set(.5, 0, 1);
				scene.add(light);

				var ambientLight = new THREE.AmbientLight(0x222222, 10);
				scene.add(ambientLight);
				
				//Create the globe sphere from the sphere factory method
				var globe = sphereFactory.createSphere(200);

				var cloud = sphereFactory.createCloud(205);

				scene.add(globe);
				scene.add(cloud);
				camera.position.z = 550;

				var render = function () {

					//run every frame 60 times per second
					requestAnimationFrame( render );

					// Rotation animation
					globe.rotation.y += 0.001;
					cloud.rotation.y += 0.0015;

					//Actual rendering the scene with the camera
					renderer.render(scene, camera);
				};

				render();

			}
		};
	}]);
