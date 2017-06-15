console.log('controller')
angular.module('app')
  .controller('ninjaController',
    ['$scope', '$routeParams', 'ninjaFactory',
      function($scope, $routeParams, ninjaFactory){
        console.log('controllers init');
        $scope.getNinjas = function(){
          ninjaFactory.getNinjas(function(ninjas){
            console.log('controllers', ninjas)
            $scope.ninjas = ninjas;
          });
        };
      }
    ]
  );
