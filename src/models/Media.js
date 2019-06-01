var mongoose = require('mongoose');

var MediaSchema = new mongoose.Schema({
  link: String,
  media: String
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Media', MediaSchema);