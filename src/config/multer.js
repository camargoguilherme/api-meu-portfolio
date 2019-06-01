const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp'),
  storage: multer.diskStorage({
    destination: (req, file, cb)=>{
      cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
    },
    filename: (req, file, cb) =>{
      file.key = `${file.originalname.replace(/( )/g, '-')}`;
      cb(null, file.key);
      // crypto.randomBytes(16, (err, hash)=>{
      //   if(err) cb(err);
      //   file.key = `${hash.toString('hex')}-${file.originalname.replace(/( )/g, '-')}`;
      //   cb(null, file.key);
      // })
    }
  })
};