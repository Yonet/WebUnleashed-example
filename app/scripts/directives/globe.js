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
				//Three.js code goes here...
				console.log('scope is ', scope);
				console.log('element is ', element);
				console.log('attrs is ', attrs);
			}
		};
	});
