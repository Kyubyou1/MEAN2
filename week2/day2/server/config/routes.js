const ninjaController = require('../controllers/ninjas');
const authController  = require('../controllers/auth');


module.exports = function(app) {
  console.log('routes');
  app.get('/ninjas', ninjaController.index)
    .get('/ninjas/:id', ninjaController.show)
    .post('/ninjas', ninjaController.create)
    .put('/ninjas/:id', ninjaController.update)
    .delete('/ninjas/:id', ninjaController.delete)

    .post('/auth/login', authController.login)
    .post('/auth/register', authController.register)
    .delete('/auth/logout', authController.logout);
};
