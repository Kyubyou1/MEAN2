const Belt = require('mongoose').model('Belt');

module.exports = {
  index(request, response) {
    Belt.find({})
      .then(function(belts) {
        response.json(belts);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  show(request, response) {
    Belt.findById(request.params.id)
      .then(function(belt) {
        response.json(belt);
      })
      .catch(console.log);
  },
  create(request, response) {
    Belt.create(request.body)
      .then(function(belt) {
        response.json(belt);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
