var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  email: String,
  username: String,
  name: String,
  resume:String,
  area: String,
  avatar: String,
  curriculum: String,
  phone: String,
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Profile', ProfileSchema);