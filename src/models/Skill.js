var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
  title: String
});


module.exports = mongoose.model('Skill', SkillSchema);