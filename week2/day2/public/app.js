console.log('hello')

angular.module('app', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html'
    })
    .when('/ninjas', {
      templateUrl: 'partials/ninjas/_index.html',
      controller: 'ninjaController'
    })
    .when('/ninjas/new', {
      templateUrl: 'partials/ninjas/_new.html',
      controller: 'ninjaController'
    })
    .when('/ninjas/:_id', {
      templateUrl: 'partials/ninjas/_show.html',
      controller: 'ninjaController'
    })
    .when('/ninjas/:_id/edit', {
      templateUrl: 'partials/ninjas/_edit.html',
      controller: 'ninjaController'
    })

    .otherwise('/');
  }])
