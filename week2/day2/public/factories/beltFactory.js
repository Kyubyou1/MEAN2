angular.module('app')
  .factory('beltFactory', ['$http', function($http) {
    return {
      belts: [],
      getBelts(callback) {
        $http.get('/belts')
          .then(response => {
            this.belts = response.data;
            callback(this.belts);
          })
          .catch(console.log);
      },
      createBelt(belt, callback) {
        $http.post('/belts', belt)
          .then(response => {
            this.belts.push(response.data);

            callback(null);
          })
          .catch(console.log);
      },
    };
  }]);
