const Portifolio = require('../models/Portifolio');

class PortifolioController{
  async store(req, res){
    const portifolio = {
      ...req.body,
      pathImage: req.file && req.file.filename
    }
    
    const portifolioNew = await Portifolio.create(portifolio);
    return res.json(portifolioNew);
  }

  async show(req, res){
    const portifolio = await Portifolio.findById(req.params.id)
    return res.json(portifolio);
  }

  async update(req, res){
    const portifolio = {
      ...req.body,
      pathImage: req.file && req.file.filename
    }
    
    const portifolioUpdated = await Portifolio.findByIdAndUpdate(req.params.id, portifolio);
    return res.json(portifolioUpdated);
  }

  async delete(req, res){
    const portifolio = await Portifolio.findByIdAndDelete(req.params.id)
    return res.json(portifolio);
  }

  async deleteMultiple(req, res){
    const ids = req.body.ids;
    await Promise.all(
      ids.map( id => Portifolio.findByIdAndDelete(id))
    )
    return res.json({status: true, message: `portifolios deleted ${ids}`});
  }

  async findAll(req, res){
    const portifolios = await Portifolio.find({})
    return res.json(portifolios);
  }

}

module.exports = new PortifolioController();