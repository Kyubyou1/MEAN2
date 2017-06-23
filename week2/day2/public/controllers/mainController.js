angular.module('app')
  .controller('mainController',
    ['$scope', '$location', 'userService', 'authService',
      function($scope, $location, userService, auth) {
        if (auth.isAuthed()) {
          return $location.path('/ninjas');
        }

        $scope.login = function() {
          userService.login($scope.user)
            .then(function() {
              $location.path('/ninjas');
            })
            .catch(console.log);
        };

        $scope.register = function() {
          userService.register($scope.user)
            .then(function() {
              $location.path('/ninjas');
            })
            .catch(console.log);
        }
      }
    ]
  );
