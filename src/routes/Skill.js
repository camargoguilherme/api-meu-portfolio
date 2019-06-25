const express = require('express'); 
const routes = express.Router();

const SkillController = require('../controllers/SkillController');
const AuthServices = require('../auth/AuthServices');

// Routes para Skill
routes.get('/skill', SkillController.findAll);
routes.get('/skill/:id', SkillController.show);
routes.post('/skill', AuthServices.isAuthenticate, SkillController.store);
routes.put('/skill/:id', AuthServices.isAuthenticate, SkillController.update);
routes.delete('/skill/:id', AuthServices.isAdmin, SkillController.delete);

module.exports = routes;