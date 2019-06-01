var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
  id: String,
  title: String
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Menu', MenuSchema);