const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const PortfolioController = require('../controllers/PortfolioController');
const AuthServices = require('../auth/AuthServices');

const uploadsConfig = require('../config/singleFile');
const upload = multer(uploadsConfig);

// Routes para Portfolio
routes.get('/portifolio', PortfolioController.index);
routes.get('/portifolio/:id', PortfolioController.show);
routes.post('/portifolio', AuthServices.isAuthenticate, upload.single('image'),PortfolioController.store);
routes.put('/portifolio/:id', AuthServices.isAuthenticate, upload.single('image'), PortfolioController.update);
routes.delete('/portifolio/:id', AuthServices.isAuthenticate, PortfolioController.delete);
routes.delete('/portifolio', AuthServices.isAdmin, PortfolioController.deleteAll);

module.exports = routes;