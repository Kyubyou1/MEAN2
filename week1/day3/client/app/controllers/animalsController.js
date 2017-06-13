angular.module('app')
  .controller('animalController',
    ['$scope', '$routeParams', '$location', 'animalFactory',
      function($scope, $routeParams, $location, animalFactory) {
        console.log($routeParams);
        //$scope.animal = $scope.animals[$routeParams.id];
        $scope.getAnimals = function(){
          animalFactory.getAnimals(function(animals){
            $scope.animals = animals;
          });
        }

        $scope.getAnimal = function(){
          animalFactory.getAnimal($routeParams.id, (animal) => {
            console.log(this);
            this.animal = animal;
          });
        }

        $scope.createAnimal = function(animal){
          $http.post('/animals', animal)
          .then(function(res){
            console.log(res);

            $location.path('/animals');
          })
          .catch(console.log);

          $scope.animal = {};
        }
      }
    ]
  );
