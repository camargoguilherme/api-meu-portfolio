var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
  title: String
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});


module.exports = mongoose.model('Skill', SkillSchema);