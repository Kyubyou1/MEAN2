console.log('controller')
angular.module('app')
  .controller('ninjaController',
    ['$scope', '$routeParams', 'ninjaFactory', '$location', 'beltFactory', 'authService',
      function($scope, $routeParams, ninjaFactory, $location, bf, auth){

        if (!auth.isAuthed()) {
          return $location.path('/');
        }

        console.log('controllers init');
        $scope.getNinjas = function(){
          ninjaFactory.getNinjas(function(ninjas){
            console.log('controllers', ninjas)
            $scope.ninjas = ninjas;
          });
        };

        $scope.createNinja = function(newNinja){
          console.log('creating ninja');
          ninjaFactory.createNinja(newNinja, function(errorsArray, ninja){
            if (errorsArray) {
              return displayErrors(errorsArray);
            }
            $location.path('/ninjas');
          });
        };

        $scope.deleteNinja = function(id){
          ninjaFactory.deleteNinja(id, displayErrors);
        };

        $scope.showNinja = function(){
          ninjaFactory.showNinja($routeParams._id, function(error, ninja){

            if (error) {
              return $location.path('/ninjas');
            }
            console.log('have ninja', ninja)
            $scope.ninja = angular.copy(ninja);
            $scope.getBelts();
          });
        };

        $scope.updateNinja = function(){
          ninjaFactory.updateNinja($scope.ninja, function(ninja){
            console.log('have ninja', ninja)
            $location.path('/ninjas/'+ ninja._id);
          }, function(error) {
            // do other things, then display error
            displayErrors(error);
          });
        };

        $scope.getBelts = function() {
          bf.getBelts(function(belts) {
            $scope.belts = belts;
          });
        };

        function displayErrors(errorArrayOrString) {
          $scope.errors = Array.isArray(errorArrayOrString) ? errorArrayOrString : [errorArrayOrString];
        }
      }
    ]
  );
