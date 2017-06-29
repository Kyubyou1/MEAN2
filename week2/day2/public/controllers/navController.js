angular.module('app')
  .controller('NavController',
    ['$scope', '$location', '$route', 'authService',
      function($scope, $location, $route, auth) {
        $scope.isAuthed= auth.isAuthed();

        $scope.logout = function() {
          console.log('logging out');
          auth.logout()
            .then(function() {
              console.log('reloading');
              $route.reload();
            })
            .catch(function(errorReponse) {
              // handle error

              console.log('got an error loggin out')
            });
        };
      }])
