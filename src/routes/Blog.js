const express = require('express'); 
const routes = express.Router();
const multer = require('multer');

const BlogController = require('../controllers/BlogController');
const AuthServices = require('../auth/AuthServices');

const uploadsConfig = require('../config/singleFile');
const upload = multer(uploadsConfig);

// Routes para Blog
routes.get('/blog', BlogController.findAll);
routes.get('/blog/:id', BlogController.show);
routes.post('/blog', AuthServices.isAuthenticate, upload.single('image'), BlogController.store);
routes.put('/blog/:id', AuthServices.isAdmin, upload.single('image'), BlogController.update);
routes.delete('/blog/:id', AuthServices.isAdmin, BlogController.delete);
routes.delete('/blog', AuthServices.isAdmin, BlogController.deleteMultiple);

module.exports = routes;