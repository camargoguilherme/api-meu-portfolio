const Media = require('../models/Media');

class MediaController{
  async store(req, res){
    const media = await Media.create(req.body);
    return res.json(media);
  }

  async show(req, res){
    const media = await Media.findById(req.params.id)
    return res.json(media);
  }

  async update(req, res){
    const media = await Media.findByIdAndUpdate(req.params.id, req.body)
    return res.json(media);
  }

  async delete(req, res){
    const media = await Media.findByIdAndDelete(req.params.id)
    return res.json(media);
  }

  async findAll(req, res){
    const medias = await Media.find({})
    return res.json(medias);
  }

}

module.exports = new MediaController();