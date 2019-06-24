const User = require('../models/User');

class UserController {

  async store(req, res) {
    const user = await User.create(req.body);
    const stored = {
      _id: user._id,
      username: user.username,
      email: user.email,
      name: user.name
    }
    return res.json(stored);
  }

  async show(req, res) {
    const user = await User.findById(req.params.id)
    const show = {
      _id: user._id,
      username: user.username,
      email: user.email,
      name: user.name
    }
    return res.json(show);
  }

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)
    const updated = {
      _id: user._id,
      username: user.username,
      email: user.email,
      name: user.name
    }
    return res.json(updated);
  }

  async delete(req, res) {
    const user = await User.findByIdAndDelete(req.params.id)
    return res.json(user);
  }

  async findAll(req, res) {
    const users = await User.find({})
    return res.json(users.map(user => {
      const show = {
        _id: user._id,
        username: user.username,
        email: user.email,
        name: user.name
      }
      return show;
    }));
  }

}

module.exports = new UserController();