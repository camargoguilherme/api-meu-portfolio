const express = require('express'); 
const routes = express.Router();

const AuthServices = require('../auth/AuthServices');

// Routes para AuthServices
routes.post('/login', AuthServices.login);
//routes.post('/logout', AuthServices.);

module.exports = routes;