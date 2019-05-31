var mongoose = require('mongoose');

var DetailSchema = new mongoose.Schema({
  title: String,
  items:[ String ]
});


module.exports = mongoose.model('Detail', DetailSchema);