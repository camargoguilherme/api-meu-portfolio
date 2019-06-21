const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const BlogController = require('../controllers/BlogController');

const uploadsConfig = require('../config/singleFile');
const upload = multer(uploadsConfig);

// Routes para Blog
routes.get('/blog', BlogController.findAll);
routes.get('/blog/:id', BlogController.show);
routes.post('/blog', upload.single('image'),BlogController.store);
routes.put('/blog/:id', upload.single('image'), BlogController.update);
routes.delete('/blog/:id', BlogController.delete);
routes.delete('/blog', BlogController.deleteMultiple);

module.exports = routes;