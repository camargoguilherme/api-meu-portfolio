var mongoose = require('mongoose');

var AboutSchema = new mongoose.Schema({
  title: String,
  items: [ String ]
});


module.exports = mongoose.model('About', AboutSchema);