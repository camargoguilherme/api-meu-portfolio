var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  email: String,
  username: String,
  name: String,
  resume:String,
  area: String,
  pathAvatar: String,
  pathCurriculum: String,
  phone: String,
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

ProfileSchema.virtual('avatar').get(function(){
  const url = process.env.URL_DEV && `${process.env.URL_DEV}:${process.env.PORT}` || process.env.URL
  return this.pathAvatar && `${url}/profiles/${decodeURIComponent(this.pathAvatar)}`
})

ProfileSchema.virtual('curriculum').get(function(){
  const url = process.env.URL_DEV && `${process.env.URL_DEV}:${process.env.PORT}` || process.env.URL
  return this.pathCurriculum && `${url}/profiles/${decodeURIComponent(this.pathCurriculum)}`
})

module.exports = mongoose.model('Profile', ProfileSchema);