const multer = require('multer');
const path = require('path');

module.exports = {
	storage: multer.diskStorage({
		destination: path.resolve(__dirname, '..', '..', 'upload'),
		filename: function(res, file, cb){
			const filename = file.originalname.replace(/\s/g, '_').split('.')[0] + `-${Date.now()}.jpeg`;
			cb(null, filename);
		}
	})
}