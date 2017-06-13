angular.module('app')
.factory('animalFactory', ['$http', function($http){
  var factory = {};

  factory.animals = [];

  factory.getAnimals = function(callbackToController){
    $http.get('/animals')
    .then(function(res){
      console.log(res);
      factory.animals = res.data;
      callbackToController(factory.animals);
    })
    .catch(function(errorRes){
      console.log(errorRes);
    })
  };

  factory.getAnimal = function(id, callback){
    console.log(id);
    var animal = factory.animals.find(function(animal, index) {
      return index === parseInt(id, 10);
    });

    if (animal) {
      console.log('animal found');
      return callback(animal);
    }
    console.log('animal not found');
    $http.get('/animals/' + id)
    .then(res => {
      console.log(res.data);
      callback(res.data);
    })
    .catch(console.log);
  }

  return factory;
}])
