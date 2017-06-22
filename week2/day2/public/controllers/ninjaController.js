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

        $scope.deleteNinja = function(id){
          ninjaFactory.deleteNinja(id, function(error){
            if (error) {
              // display message
            }
          })
        };

        $scope.showNinja = function(){
          ninjaFactory.showNinja($routeParams._id, function(error, ninja){
            console.log('have ninja', ninja)
            $scope.ninja = angular.copy(ninja);

          })
        }
        $scope.updateNinja = function(){
          ninjaFactory.updateNinja($scope.ninja, function(error, ninja){
            if (error){
              console.log('Error updating ninja');
            }
            console.log('have ninja', ninja)
            $location.path('/ninjas/'+ ninja._id);
          })
        }
      }
    ]
  );
