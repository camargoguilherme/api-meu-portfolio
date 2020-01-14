const fs = require('fs');
const path = require('path');

class Utility {
  /**
   * deletes all files in the folder
   * @param path path
   */
  deleteFiles (_path) {
    if (fs.existsSync(_path)) {
      fs.readdirSync(_path).forEach(function (file, index) {
        var currentPath = path.resolve(_path, file);
        if (fs.lstatSync(currentPath).isDirectory()) {
          // recurse
          deleteFiles(currentPath);
        } else { // delete file
          fs.unlinkSync(currentPath);
        }
      });
    }
  }
  
  /**
   * create file
   * @param name file name
   * @param data data 
   * @returns pathFile
   */
  async createFile ( _name, _data){
    const pathFile = path.resolve(__dirname, '..', '..', 'tmp', _name);
    await fs.writeFile(pathFile, _data, { encoding: 'utf-8'})
    return pathFile;
  }
}


module.exports = new Utility;