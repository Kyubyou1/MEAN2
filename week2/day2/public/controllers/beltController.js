angular.module('app')
  .controller('beltController',
    ['$scope', '$routeParams', '$location', 'beltFactory',
      function($scope, $routeParams, $location, bf) {
        $scope.createBelt = function(belt) {
          bf.createBelt(belt, function(error) {
            if (error) {
              //handle error
            }

            $location.path('/belts');
          });
        };

        $scope.getBelts = function() {
          console.log('belts');
          bf.getBelts(function(belts) {
            $scope.belts = belts;
          });
        };
      }
    ]
  );
