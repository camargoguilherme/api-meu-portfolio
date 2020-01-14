const Profile = require('../models/Profile');
const File = require('../models/File');

class FileController{
  async store(req, res){
     const { originalname, key } = req.file;
     const { type, profileId } = req.body;

    const profile = await Profile.findById({ _id: profileId});

    const file = await File.create({
      title: originalname,
      type: type,
      path: key
    });
    
    type === 'avatar' ? profile.avatar = file.url : profile.curriculum = file.url;
    profile.save();

    return res.json(file);
  }

  async show(req, res){
    const file = await File.findById(req.params.id)
    return res.json(file);
  }

  async update(req, res){
    const file = await File.findByIdAndUpdate(req.params.id, req.body)
    return res.json(file);
  }

  async delete(req, res){
    const file = await File.findByIdAndRemove(req.params.id)
    return res.json(file);
  }

  async findAll(req, res){
    const file = await File.find({})
    return res.json(file);
  }
}

module.exports = new FileController();