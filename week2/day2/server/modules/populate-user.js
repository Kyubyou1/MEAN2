const User = require('mongoose').model('User');

module.exports = function(request, response, next) {
  if (request.session && request.session.user) {
    User.findById(request.session.user._id)
      .then(function(user) {
        request.user = user;
      })
      .catch(next);
  } else {
    next();
  }
};
