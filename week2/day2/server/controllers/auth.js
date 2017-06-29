const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    User.findOne({ username: request.body.username })
      .then(function(user) {
        if (!user) throw new Error('no credentials match');

        return User.verifyPassword(request.body.password, user.password)
                      .then(function() {
                        login(request, response, user);
                      });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  register(request, response) {
    User.create(request.body)
      .then(function(user) {
        login(request, response, user);
      })
      .catch(console.log);
  },
  logout(request, response) {
    console.log('made it to logout');

    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');
    response.json(true);
  }
};

function login(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;

  response.cookie('userID', user._id);
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(true);
}
