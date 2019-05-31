const Menu = require('../models/Menu');

class MenuController{
  async store(req, res){
    const menu = await Menu.create(req.body);
    return res.json(menu);
  }

  async show(req, res){
    const menu = await Menu.findById(req.params.id)
    return res.json(menu);
  }

  async update(req, res){
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body)
    return res.json(menu);
  }

  async delete(req, res){
    const menu = await Menu.findByIdAndDelete(req.params.id)
    return res.json(menu);
  }

  async findAll(req, res){
    const menus = await Menu.find({})
    return res.json(menus);
  }

}

module.exports = new MenuController();