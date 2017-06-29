// const Ninja = require('../models/ninja');
const Ninja = require('mongoose').model('Ninja');

module.exports = {
  index: function(request, response) {
    Ninja.find({}).populate('belt')
    .then(function(ninjas){
      console.log(ninjas);
      response.json(ninjas);
    })
    .catch(errorHandler.bind(response));
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
  let errors = [];

  if (error.errors) {
    // console.log(error.errors.name.message);
    // for (const [field, errorObject] of Object.entries(error.errors)) {
    //   // console.log(item[1].message);
    //
    //   errors.push(errorObject.message);
    // }

    errors = Object.keys(error.errors).map(key => error.errors[key].message);
  } else if (typeof error === 'string') {
    errors.push(error);
  } else {
    errors.push(error.message);
  }

  console.log(errors);

  this.status(422).json(errors);
}
