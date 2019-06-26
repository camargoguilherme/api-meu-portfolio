const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const ProfileController = require('../controllers/ProfileController');
const AuthServices = require('../auth/AuthServices');
const uploadsConfig = require('../config/multiFiles');
const upload = multer(uploadsConfig);

// Routes para Profile

routes.get('/profile', ProfileController.findAll);
routes.get('/profile/:id', ProfileController.show);
routes.post('/profile', AuthServices.isAuthenticate, upload.fields([{ name: 'avatar', maxCount: 1} , {name: 'curriculum', maxCount: 1}]),ProfileController.store);
routes.put('/profile/:id', AuthServices.isAuthenticate, upload.fields([{ name: 'avatar', maxCount: 1} , {name: 'curriculum', maxCount: 1}]), ProfileController.update);
routes.delete('/profile/:id', AuthServices.isAuthenticate, ProfileController.delete);
routes.delete('/profile', AuthServices.isAdmin, ProfileController.deleteMultiple);

module.exports = routes;