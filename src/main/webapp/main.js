(function() {
'use strict';

var app = angular.module('filmes', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when("/ator", {
		templateUrl: './pages/ator/ator.html'
	});
	
	$routeProvider.when("/filmes", {
		templateUrl: './pages/filmes/filmes.html'
	});
	
	$routeProvider.otherwise({redirectTo: '/ator'});
	
});

app.controller('FilmesController', function($scope) {
	
    $scope.adicionar = function() {
    	alert(1);
    }
   
});


})();
