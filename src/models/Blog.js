var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  link: String,
  resume: String,
  pathImage: String,
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

BlogSchema.virtual('image').get(function(){
  const url = process.env.URL || 'http://localhost:3333'
  return this.pathImage && `${url}/files/${decodeURIComponent(this.pathImage)}`
})


module.exports = mongoose.model('Blog', BlogSchema);