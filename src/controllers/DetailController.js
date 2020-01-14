const Detail = require('../models/Detail');

class DetailController{
  async store(req, res){
    const detail = await Detail.create(req.body);
    return res.json(detail);
  }

  async show(req, res){
    const detail = await Detail.findById(req.params.id)
    return res.json(detail);
  }

  async update(req, res){
    const detail = await Detail.findByIdAndUpdate(req.params.id, req.body)
    return res.json(detail);
  }

  async delete(req, res){
    const detail = await Detail.findByIdAndRemove(req.params.id)
    return res.json(detail);
  }

  async findAll(req, res){
    const detail = await Detail.find({})
    return res.json(detail);
  }

}

module.exports = new DetailController();