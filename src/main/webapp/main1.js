(function() {
'use strict';

var app = angular.module('FilmesController', ['ngRoute']);

//app.config(function($routeProvider) {
//	$routeProvider.when("/ator", {
//		templateUrl: '/pages/ator/ator.html'
//	});
//	
//	$routeProvider.otherwise({redirectTo: '/ator'});
//	
//});

	app.controller('FilmesController', function($scope) {
	    $scope.testar = function() {
	    	alert('Teste');
	    };
	});
})();