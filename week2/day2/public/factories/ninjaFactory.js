console.log('factory')

angular.module('app')
  .factory('ninjaFactory', ['$http', function($http){
    const factory = {};
    factory.ninjas = [];
    factory.getNinjas = function(callbackToController){
      console.log('factory before $http');
      $http.get('/ninjas')
      .then(function(response){
        console.log('factorys', response.data);
        factory.ninjas = response.data;
        callbackToController(factory.ninjas);
      })
      .catch(console.log);
    };

    factory.createNinja = function(newNinja, callback){
      console.log('inside factory creating ninja')
      $http.post('/ninjas', newNinja)
      .then(function(response){
        console.log(`got ninja?`);
        factory.ninjas.push(response.data);
        callback(response.data);
      })
      .catch(console.log);
    }

    return factory;
  }])
