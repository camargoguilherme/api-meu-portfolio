const express = require('express');
const mongoose = require('mongoose'); 
const path = require('path');
const cors = require('cors');
const app = express();

const routes = require('./routes');

const port = process.env.PORT || 3333;
mongoose.connect(process.env.URL_DB, { useNewUrlParser: true });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(routes)

app.listen(port, () =>{
	console.log(`API RUNNING ON http://localhost:${port}`)
});