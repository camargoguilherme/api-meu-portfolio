const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const PortifolioController = require('../controllers/PortifolioController');

const uploadsConfig = require('../config/singleFile');
const upload = multer(uploadsConfig);

// Routes para Portifolio
routes.get('/portifolio', PortifolioController.findAll);
routes.get('/portifolio/:id', PortifolioController.show);
routes.post('/portifolio', upload.single('image'),PortifolioController.store);
routes.put('/portifolio/:id', upload.single('image'), PortifolioController.update);
routes.delete('/portifolio/:id', PortifolioController.delete);
routes.delete('/portifolio', PortifolioController.deleteMultiple);

module.exports = routes;