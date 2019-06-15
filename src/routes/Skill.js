const express = require('express'); 
const routes = express.Router();

const SkillController = require('../controllers/SkillController');

// Routes para Skill
routes.get('/skill', SkillController.findAll);
routes.get('/skill/:id', SkillController.show);
routes.post('/skill', SkillController.store);
routes.put('/skill/:id', SkillController.update);
routes.delete('/skill/:id', SkillController.delete);

module.exports = routes;