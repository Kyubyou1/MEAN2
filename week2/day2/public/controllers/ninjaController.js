console.log('controller')
angular.module('app')
  .controller('ninjaController',
    ['$scope', '$routeParams', 'ninjaFactory', '$location',
      function($scope, $routeParams, ninjaFactory, $location){
        console.log('controllers init');
        $scope.getNinjas = function(){
          ninjaFactory.getNinjas(function(ninjas){
            console.log('controllers', ninjas)
            $scope.ninjas = ninjas;
          });
        };

        $scope.createNinja = function(newNinja){
          console.log('creating ninja');
          ninjaFactory.createNinja(newNinja, function(ninja){
            $location.path('/ninjas');
          });
        };
      }
    ]
  );
