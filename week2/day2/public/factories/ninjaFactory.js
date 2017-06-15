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


    return factory;
  }])
