var mongoose = require('mongoose');

var DetailSchema = new mongoose.Schema({
  title: String,
  info: String
});


module.exports = mongoose.model('Detail', DetailSchema);