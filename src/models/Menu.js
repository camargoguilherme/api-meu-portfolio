var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
  id: String,
  title: String
});


module.exports = mongoose.model('Menu', MenuSchema);