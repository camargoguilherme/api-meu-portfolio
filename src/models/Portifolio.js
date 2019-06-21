var mongoose = require('mongoose');

var PortifolioSchema = new mongoose.Schema({
  title: String,
  github: String,
  pathImage: String,
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

PortifolioSchema.virtual('image').get(function(){
  const url = process.env.URL || 'http://localhost:3333'
  return this.pathImage && `${url}/files/${decodeURIComponent(this.pathImage)}`
})


module.exports = mongoose.model('Portifolio', PortifolioSchema);