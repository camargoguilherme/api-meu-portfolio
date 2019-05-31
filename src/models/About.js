var mongoose = require('mongoose');

var AboutSchema = new mongoose.Schema({
  info: String,
});


module.exports = mongoose.model('About', AboutSchema);