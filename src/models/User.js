var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  name: String,
  token: String
},{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
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
  authUser(password) {
    return password === this.password;
  },
  createToken() {
    // create a token
    var token = jwt.sign({ id: this._id }, process.env.JWT_WORD || 'JWT_WORD', 
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
      token: this.createToken()
    }
  },
};

module.exports = mongoose.model('User', UserSchema);