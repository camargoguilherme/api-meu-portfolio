const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const PortifolioController = require('../controllers/PortifolioController');
const AuthServices = require('../auth/AuthServices');

const uploadsConfig = require('../config/singleFile');
const upload = multer(uploadsConfig);

// Routes para Portifolio
routes.get('/portifolio', PortifolioController.findAll);
routes.get('/portifolio/:id', PortifolioController.show);
routes.post('/portifolio', AuthServices.isAuthenticate, upload.single('image'),PortifolioController.store);
routes.put('/portifolio/:id', AuthServices.isAuthenticate, upload.single('image'), PortifolioController.update);
routes.delete('/portifolio/:id', AuthServices.isAuthenticate, PortifolioController.delete);
routes.delete('/portifolio', AuthServices.isAdmin, PortifolioController.deleteMultiple);

module.exports = routes;