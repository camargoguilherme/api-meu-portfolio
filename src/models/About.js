var mongoose = require('mongoose');

var AboutSchema = new mongoose.Schema({
  title: String,
  items: [ String ]
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('About', AboutSchema);