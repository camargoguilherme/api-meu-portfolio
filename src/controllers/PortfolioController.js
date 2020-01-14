const Portfolio = require('../models/Portfolio');
const { uploadFile, deleteFolder } = require('../firebase/index');

class PortfolioController {

  async index(req, res) {
    await Portfolio.find({}, (error, portfolios) => {
      if (error)
        return res.status(500).json({ message: "Internal Server Error", error });
      return res.status(200).json({ portfolios, quantity: portfolios.length });
    })
  }

  async store(req, res) {
    const { title } = req.body;
    const { path, filename, mimetype, destination } = req.file;

    const file = fs.readFileSync(path);
    const pathFile = `portfolio/${title.replace(/[^A-Z0-9]+/ig, "-").toLowerCase()}/${filename}`;

    const portfolio = {
      ...req.body,
      url: await uploadFile(pathFile, file, mimetype)
    }

    deleteFiles(destination);

    Portfolio.create(portfolio)
      .then(portfolio => {
        return res.status(201).json({ message: 'Portfolio created successfully', portfolio })
      }).catch(error => {
        return res.status(500).json({ message: 'error at save portfolio', error })
      });
  }

  async update(req, res) {
    const { title } = req.body;
    const { path, filename, mimetype, destination } = req.file;

    const file = fs.readFileSync(path);
    const pathFile = `portfolio/${title.replace(/[^A-Z0-9]+/ig, "-").toLowerCase()}/${filename}`;

    req.body.url = await uploadFile(pathFile, file, mimetype)


    deleteFiles(destination);

    Portfolio.findOne(req.params.id,
      (error, portfolio) => {
        if (error)
          return res.status(500).json({ message: "Internal Server Error", error });

        if (portfolio) {
          const keys = Object.keys(req.body);

          keys.map(key => {
            portfolio[key] = req.body[key]
          })

          portfolio.save()
            .then(portfolio => {
              return res.status(200).json({ message: 'Portfolio updated successfully', portfolio })
            }).catch(error => {
              return res.status(500).json({ message: 'error at update portfolio', error })
            });
        } else {
          return res.status(404).json({ message: 'Portfolio not found', params: { ...req.params, ...req.query } })
        }
      })
  }

  async show(req, res) {
    Portfolio.findById(req.params.id,
      (error, portfolio) => {
        if (error)
          return res.status(404).json({ message: 'Portfolio not found', params: { ...req.params, ...req.query } })
        return res.status(200).json({ message: 'Portfolio found', portfolio })
      });
  }

  async delete(req, res) {
    await Portfolio.findByIdAndDelete(req.params.id, (error, portfolio) => {
      if (error)
        return res.status(500).json({ message: "Internal Server Error", error })

      if (!portfolio)
        return res.status(404).json({ message: "Portfolio not found", params: { ...req.params, ...req.query } })
      const path = portfolio['title'].replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
      deleteFolder(path);
      return res.status(200).json({ message: "Portfolio deleted successfully", portfolio });
    })
  }

  async deleteAll(req, res) {
    await Portfolio.find({}, (error, portfolio) => {
      if (error)
        return res.status(500).json({ message: "Internal Server Error", error })
      if (!portfolio)
        return res.status(404).json({ message: "Portfolios not found" })
      Promise.all(
        portfolio.map(portfolio => {
          const portfolioDeleted = { ...portfolio };
          const path = portfolio['title'].replace(/[^A-Z0-9]+/ig, "-").toLowerCase();
          deleteFolder(path);
          portfolio.remove();
          return portfolioDeleted
        })
      ).then(portfolioDeleted => {
        return res.status(200).json({ message: "Produtcs deleted successfully", portfolio: portfolioDeleted, quantity: portfolio.length });
      })
    })
  }
}

module.exports = new PortfolioController();