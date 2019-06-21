const Profile = require('../models/Profile');

class ProfileController{
  async store(req, res){
    const { avatar, curriculum } = req.files;

    const profile = {
      ...req.body,
      pathAvatar: avatar && avatar[0].filename,
      pathCurriculum: curriculum && curriculum[0].filename
    }
    
    const profileNew = await Profile.create(profile);
    return res.json(profileNew);
  }

  async show(req, res){
    const profile = await Profile.findById(req.params.id)
    return res.json(profile);
  }

  async update(req, res){
    const { avatar, curriculum } = req.files;
    
    const profile = {
      ...req.body,
      pathAvatar: avatar && avatar[0].filename,
      pathCurriculum: curriculum && curriculum[0].filename
    }
  
    const profileUpdated = await Profile.findByIdAndUpdate(req.params.id, profile);
    return res.json(profileUpdated);
  }

  async delete(req, res){
    const profile = await Profile.findByIdAndDelete(req.params.id)
    return res.json(profile);
  }

  async deleteMultiple(req, res){
    const ids = req.body.ids;
    await Promise.all(
      ids.map( id => Profile.findByIdAndDelete(id))
    )
    return res.json({status: true, message: `profiles deleted ${ids}`});
  }

  async findAll(req, res){
    const profiles = await Profile.find({})
    return res.json(profiles);
  }

}

module.exports = new ProfileController();