const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const PortfolioController = require('../controllers/PortfolioController');
const AuthServices = require('../auth/AuthServices');

const uploadsConfig = require('../config/singleFile');
const upload = multer(uploadsConfig);

// Routes para Portfolio
routes.get('/portfolio', PortfolioController.index);
routes.get('/portfolio/:id', PortfolioController.show);
routes.post('/portfolio', AuthServices.isAuthenticate, upload.single('image'),PortfolioController.store);
routes.put('/portfolio/:id', AuthServices.isAuthenticate, upload.single('image'), PortfolioController.update);
routes.delete('/portfolio/:id', AuthServices.isAuthenticate, PortfolioController.delete);
routes.delete('/portfolio', AuthServices.isAdmin, PortfolioController.deleteAll);

module.exports = routes;