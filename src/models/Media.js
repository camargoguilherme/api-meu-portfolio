var mongoose = require('mongoose');

var MediaSchema = new mongoose.Schema({
  link: String,
  media: String
});


module.exports = mongoose.model('Media', MediaSchema);