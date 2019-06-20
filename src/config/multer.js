const multer = require('multer');
const path = require('path');

// Check File Type
function checkFileType(file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif|pdf/;
	// Check ext
	const extname = 
	filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);
	
	if (mimetype && extname) {
			return cb(null, true);
		} else {
			cb('Error: Images Only!');
	}
}
module.exports = {
	storage: multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'tmp'),
		filename: function(res, file, cb){
			cb(null, file.originalname);
		}
	}),
	limits: { fileSize: 1024*1024*5, files: 2 },
	fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}