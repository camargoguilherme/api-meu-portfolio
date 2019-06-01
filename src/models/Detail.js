var mongoose = require('mongoose');

var DetailSchema = new mongoose.Schema({
  title: String,
  info: String
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Detail', DetailSchema);