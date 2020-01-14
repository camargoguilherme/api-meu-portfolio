var mongoose = require('mongoose');

var PortfolioSchema = new mongoose.Schema({
  title: String,
  github: String,
  url: String
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Portfolio', PortfolioSchema);