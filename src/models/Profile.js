var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  email: String,
  username: String,
  name: String,
  resume:String,
  area: String,
  perfil: String,
  phone: String,
});


module.exports = mongoose.model('Profile', ProfileSchema);