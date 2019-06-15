const express = require('express'); 
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const FileController = require('../controllers/FileController');

// Route para Avatar
routes.post('/avatar', 
  multer(multerConfig).single('file'), 
  FileController.store);
routes.get('/avatar', FileController.findAll);
routes.get('/avatar/:id', FileController.show);
routes.put('/avatar/:id', 
	multer(multerConfig).single('file'),
	FileController.update);
routes.delete('/avatar/:id', FileController.delete);

module.exports = routes;