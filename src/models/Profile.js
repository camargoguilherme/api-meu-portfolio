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
  const url = process.env.URL || 'http://localhost:3333'
  return this.pathAvatar && `${url}/profile/${decodeURIComponent(this.pathAvatar)}`
})

ProfileSchema.virtual('curriculum').get(function(){
  const url = process.env.URL || 'http://localhost:3333'
  return this.pathCurriculum && `${url}/profile/${decodeURIComponent(this.pathCurriculum)}`
})

module.exports = mongoose.model('Profile', ProfileSchema);