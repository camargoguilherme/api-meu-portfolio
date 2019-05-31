const express = require('express'); 
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
const AboutController = require('./controllers/AboutController');
const DetailController = require('./controllers/DetailController');
const MenuController = require('./controllers/MenuController');
const ProfileController = require('./controllers/ProfileController');
const SkillController = require('./controllers/SkillController');
const MediaController = require('./controllers/MediaController');
const UserController = require('./controllers/UserController');

// Routes para Boxes
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);

// Routes para About
routes.get('/about', AboutController.findAll);
routes.get('/about/:id', AboutController.show);
routes.post('/about', AboutController.store);
routes.put('/about/:id', AboutController.update);
routes.delete('/about/:id', AboutController.delete);


// Routes para Detail
routes.get('/detail', DetailController.findAll);
routes.get('/detail/:id', DetailController.show);
routes.post('/detail', DetailController.store);
routes.put('/detail/:id', DetailController.update);
routes.delete('/detail/:id', DetailController.delete);


// Routes para Menu
routes.get('/menu', MenuController.findAll);
routes.get('/menu/:id', MenuController.show);
routes.post('/menu', MenuController.store);
routes.put('/menu/:id', MenuController.update);
routes.delete('/menu/:id', MenuController.delete);


// Routes para Profile
routes.get('/profile', ProfileController.findAll);
routes.get('/profile/:id', ProfileController.show);
routes.post('/profile', ProfileController.store);
routes.put('/profile/:id', ProfileController.update);
routes.delete('/profile/:id', ProfileController.delete);


// Routes para Skill
routes.get('/skill', SkillController.findAll);
routes.get('/skill/:id', SkillController.show);
routes.post('/skill', SkillController.store);
routes.put('/skill/:id', SkillController.update);
routes.delete('/skill/:id', SkillController.delete);


// Routes para Media
routes.get('/media', MediaController.findAll);
routes.get('/media/:id', MediaController.show);
routes.post('/media', MediaController.store);
routes.put('/media/:id', MediaController.update);
routes.delete('/media/:id', MediaController.delete);

// Routes para User
// routes.get('/user', UserController.findAll);
// routes.get('/user/:id', UserController.show);
// routes.post('/user', UserController.store);
// routes.put('/user/:id', UserController.update);
// routes.delete('/user/:id', UserController.delete);

// Route para Avatar
routes.post('/avatar', 
  multer(multerConfig).single('file'), 
  FileController.store);

// Routes para Curriculum
routes.post('/curriculum', 
multer(multerConfig).single('file'), 
FileController.store);

module.exports  = routes;