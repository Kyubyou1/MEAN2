// const Ninja = require('../models/ninja');
const Ninja = require('mongoose').model('Ninja');

module.exports = {
  index: function(request, response) {
    Ninja.find({}, function(error, ninjas){
      if(error){
        return errorHandler.call(response, error);
      }
      response.json(ninjas);
    })
  },
  show(request, response) {
    console.log("Inside controller show");
    Ninja.findById(request.params.id)
    .then(function(ninja){
      response.json(ninja);
    })
    .catch(errorHandler.bind(response));
  },
  create(request, response) {
    console.log('creating ninja controller')
    Ninja.create(request.body)
    .then(function(newNinja){

      console.log('ninja')
      response.json(newNinja);
    })
    .catch(errorHandler.bind(response));
  },
  delete(request, response) {
    Ninja.findByIdAndRemove(request.params.id)
    .then(function(sacrificed){
      console.log(`${sacrificed.name} has been sacrificed`)
      response.json(true);
    })
    .catch(errorHandler.bind(response));
  },
  update(request, response) {
    Ninja.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(function(ninja){
      response.json(ninja);
      console.log('ninja',ninja);
    })
    .catch(errorHandler.bind(response));
  }
};

function errorHandler(error){
  console.log(error);
  this.status(422).json(error.message);
}
