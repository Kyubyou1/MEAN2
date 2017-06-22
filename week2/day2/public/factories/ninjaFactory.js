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

    factory.deleteNinja = function(id, callback){
      $http.delete('/ninjas/' + id)
      .then(function(response){
        removeNinjaById(id);
        callback(null);
      })
      .catch(console.log);
    }

    factory.showNinja = function(id, callback){
      console.log("inside showNinja");
      const chosen = getNinjaById(id);
      if (chosen){
        return callback(null, chosen);
      }

      $http.get('/ninjas/' + id)
      .then(function(response){
        factory.ninjas.push(response.data);
        callback(null, response.data);
      })
    }

    function getNinjaById(id) {
      return factory.ninjas.find(ninja => ninja._id === id);
    }

    function removeNinjaById(id, ...insert) {
      const ninja = getNinjaById(id);

      if (ninja) {
        factory.ninjas.splice(factory.ninjas.indexOf(ninja), 1, ...insert);
      }

      return ninja;
    }

    factory.updateNinja = function(ninja, callback){
      console.log("inside updateNinja");
      $http.put('/ninjas/' + ninja._id, ninja)
      .then(function(response){
        console.log('factory.ninjas',factory.ninjas);
        removeNinjaById(ninja._id, response.data);

        callback(null, response.data);
      })

    }
    return factory;
  }]);
