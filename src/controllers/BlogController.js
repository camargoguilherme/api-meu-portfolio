const Blog = require('../models/Blog');

class BlogController{
  async store(req, res){
    const blog = {
      ...req.body,
      pathImage: req.file && req.file.filename
    }
    const blogNew = await Blog.create(blog);
    return res.json(blogNew);
  }

  async show(req, res){
    const blog = await Blog.findById(req.params.id)
    return res.json(blog);
  }

  async update(req, res){
    let blog = {
      ...req.body,
    }
    req.file && (blog.pathImage = req.file.filename)
    
    const blogUpdated = await Blog.findByIdAndUpdate(req.params.id, blog);
    return res.json(blogUpdated);
  }

  async delete(req, res){
    const blog = await Blog.findByIdAndDelete(req.params.id)
    return res.json(blog);
  }

  async deleteMultiple(req, res){
    const ids = req.body.ids;
    await Promise.all(
      ids.map( id => Blog.findByIdAndDelete(id))
    )
    return res.json({status: true, message: `blogs deleted ${ids}`});
  }

  async findAll(req, res){
    const blogs = await Blog.find({})
    return res.json(blogs);
  }

}

module.exports = new BlogController();