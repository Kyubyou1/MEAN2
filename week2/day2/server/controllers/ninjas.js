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
  create(request, response) {},
  delete(request, response) {},
  update(request, response) {}
};
