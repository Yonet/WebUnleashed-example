'use strict';

/**
 * @ngdoc directive
 * @name webunleashedExampleApp.directive:globe
 * @description
 * # globe
 */
angular.module('webunleashedExampleApp')
	.directive('globe', function () {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				//Initilize the camera,scene and renderer.
				var camera;
				var scene;
				var renderer;
				var width = element[0].parentNode.clientWidth;
				var height = element[0].parentNode.clientWidth;
				init();

				function init() {
					camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
					camera.position.set(2, 4, 5);
					scene = new THREE.Scene();


					// Lights
					scene.add(new THREE.AmbientLight( 0x404040 )); // soft white light);
					var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
					directionalLight.position.set( 0, 1, 0 );//Shining from the top
					directionalLight.position.normalize();
					scene.add(directionalLight);

					// Renderer
					renderer = new THREE.WebGLRenderer();
					renderer.setSize(width, height);
					element[0].appendChild(renderer.domElement);

					// Events
					window.addEventListener('resize', onWindowResize, false);

				}
				//
				function onWindowResize(event) {
					renderer.setSize(window.innerWidth, window.innerHeight);
					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();
				}

				//
				var t = 0;

				function animate() {
					requestAnimationFrame(animate);
					render();
				}

				//Render function
				function render() {
					var timer = Date.now() * 0.0005;
					camera.position.x = Math.cos(timer) * 10;
					camera.position.y = 4;
					camera.position.z = Math.sin(timer) * 10;
					camera.lookAt(scene.position);
					renderer.render(scene, camera);
				}
	
		
			}
		};
	});
