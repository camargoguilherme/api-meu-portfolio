const About = require('../models/About');

class AboutController{
  async store(req, res){
    const about = await About.create(req.body);
    return res.json(about);
  }

  async show(req, res){
    const about = await About.findById(req.params.id)
    return res.json(about);
  }

  async update(req, res){
    const about = await About.findByIdAndUpdate(req.params.id, req.body)
    return res.json(about);
  }

  async delete(req, res){
    const about = await About.findByIdAndDelete(req.params.id)
    return res.json(about);
  }

  async findAll(req, res){
    const about = await About.find({})
    return res.json(about);
  }

}

module.exports = new AboutController();