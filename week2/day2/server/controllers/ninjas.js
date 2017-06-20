// const Ninja = require('../models/ninja');
const Ninja = require('mongoose').model('Ninja');

module.exports = {
  index: function(request, response) {
    Ninja.find({}, function(error, ninjas){
      if(error){
        return console.log(error);
      }
      response.json(ninjas);
    })
  },
  show(request, response) {},
  create(request, response) {
    console.log('creating ninja controller')
    Ninja.create(request.body)
    .then(function(newNinja){

      console.log('ninja')
      response.json(newNinja);
    })
    .catch(errorHandler.bind(response));
  },
  delete(request, response) {},
  update(request, response) {}
};

function errorHandler(error){
  console.log(error);
  this.status(422).json(error.message);
}
