const ninjaController = require('../controllers/ninjas');
const authController  = require('../controllers/auth');
const beltController  = require('../controllers/belts');


module.exports = function(app) {
  console.log('routes');
  app.get('/ninjas', ninjaController.index)
    .get('/ninjas/:id', ninjaController.show)
    .post('/ninjas', ninjaController.create)
    .put('/ninjas/:id', ninjaController.update)
    .delete('/ninjas/:id', ninjaController.delete)

    .post('/auth/login', authController.login)
    .post('/auth/register', authController.register)
    .delete('/auth/logout', authController.logout)

    .get('/belts', beltController.index)
    .post('/belts', beltController.create)
    .get('/belts/:id', beltController.show);
};
