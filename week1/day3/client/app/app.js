angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    console.log($routeProvider);

    $routeProvider.when('/animals', {
      templateUrl: '/partials/animals/_index.html'
    })
    .when('/animals/new', {
      templateUrl: '/partials/animals/_new.html',
      controller: 'animalController'
    })
    .when('/animals/:id', {
      templateUrl: '/partials/animals/_show.html',
      controller: 'animalController'
    })
    .otherwise('/animals');
  }]);
