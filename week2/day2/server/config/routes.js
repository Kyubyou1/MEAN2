const ninjaController = require('../controllers/ninjas');


module.exports = function(app) {
  console.log('routes');
  app.get('/ninjas', ninjaController.index)
    .get('/ninjas/:id', ninjaController.show)
    .post('/ninjas', ninjaController.create)
    .put('/ninjas/:id', ninjaController.update)
    .delete('/ninjas/:id', ninjaController.delete);
};
