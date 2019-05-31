const Profile = require('../models/Profile');

class ProfileController{
  async store(req, res){
    const profile = await Profile.create(req.body);
    return res.json(profile);
  }

  async show(req, res){
    const profile = await Profile.findById(req.params.id)
    return res.json(profile);
  }

  async update(req, res){
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body)
    return res.json(profile);
  }

  async delete(req, res){
    const profile = await Profile.findByIdAndDelete(req.params.id)
    return res.json(profile);
  }

  async findAll(req, res){
    const profiles = await Profile.find({})
    return res.json(profiles);
  }

}

module.exports = new ProfileController();