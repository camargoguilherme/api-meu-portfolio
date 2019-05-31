const Skill = require('../models/Skill');

class SkillController{
  async store(req, res){
    const skill = await Skill.create(req.body);
    return res.json(skill);
  }

  async show(req, res){
    const skill = await Skill.findById(req.params.id)
    return res.json(skill);
  }

  async update(req, res){
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body)
    return res.json(skill);
  }

  async delete(req, res){
    const skill = await Skill.findByIdAndDelete(req.params.id)
    return res.json(skill);
  }

  async findAll(req, res){
    const skills = await Skill.find({})
    return res.json(skills);
  }

}

module.exports = new SkillController();