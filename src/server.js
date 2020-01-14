const express = require('express');
const mongoose = require('mongoose'); 
const cors = require('cors');
const app = express();

const routes = require('./routes');

const port = process.env.PORT || 3003;
mongoose.connect(process.env.URL_DB_DEV || process.env.URL_DB, { useNewUrlParser: true });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes)

app.listen(port, () =>{
	console.log(`API RUNNING ON http://localhost:${port}`)
});