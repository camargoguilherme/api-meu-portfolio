var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  name: String,
  resume:String,
  area: String,
  perfil: String,
  phone: String,
  token: String
});

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
      this.password = this._hashPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return bcrypt.hashSync(password);
  },
  authenticateUser(password) {
    return bcrypt.compareSync(password, this.password);
  },
  createToken() {
    // create a token
    var token = jwt.sign({ id: this._id }, process.env.JWT_WORD || config.secret, 
      { 
        expiresIn: 3600 // expires in 24 hours
      });
    return token   
  },  
  toJson() {
    return {
      _id: this._id,
      email: this.email,
      username: this.username,
      name: this.name,
      resume: this.resume,
      area: this.area,
      perfil: this.perfil,
      phone: this.phone,
      token: this.createToken()
    }
  },
};

module.exports = mongoose.model('User', UserSchema);