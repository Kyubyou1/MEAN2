console.log('hello')

angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/ninjas', {
      templateUrl: 'partials/ninjas/_index.html',
      controller: 'ninjaController'
    })
    .when('/ninjas/new', {
      templateUrl: 'partials/ninjas/_new.html',
      controller: 'ninjaController'
    })

    .otherwise('/ninjas')
  }])
