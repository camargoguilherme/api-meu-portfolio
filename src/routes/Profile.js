const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const ProfileController = require('../controllers/ProfileController');

const uploadsConfig = require('../config/multiFiles');
const upload = multer(uploadsConfig);

// Routes para Profile
routes.get('/profile', ProfileController.findAll);
routes.get('/profile/:id', ProfileController.show);
routes.post('/profile', upload.fields([{ name: 'avatar', maxCount: 1} , {name: 'curriculum', maxCount: 1}]),ProfileController.store);
routes.put('/profile/:id', upload.fields([{ name: 'avatar', maxCount: 1} , {name: 'curriculum', maxCount: 1}]), ProfileController.update);
routes.delete('/profile/:id', ProfileController.delete);
routes.delete('/profile', ProfileController.deleteMultiple);

module.exports = routes;