const express = require ('express');
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionsController = require('./controllers/sessionsController')


const routes = express.Router();

//login
routes.post('/session',sessionsController.create)

//ongs
routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.show)


//incidents
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index)
routes.delete('/incidents/:id', incidentController.delete)



//profile
routes.get('/profile',profileController.index)
module.exports = routes;


