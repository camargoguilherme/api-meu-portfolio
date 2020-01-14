// ReferenceError: XMLHttpRequest is not defined
// https://stackoverflow.com/questions/52891992/referenceerror-xmlhttprequest-is-not-defined-when-running-my-angular-6-univers
global.WebSocket = require('ws');
global.XMLHttpRequest = require('xhr2');

// Firebase App (the core Firebase SDK) is always required and must be listed first
const firebase = require('firebase/app');

require('firebase/auth');
require('firebase/storage');

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = require('./config');

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storageRef = app.storage().ref('produtos');

listFolders = async (path) => {
  let ref = storageRef.child(path);
  return ref.listAll().then(dir => dir.prefixes)
};

listItems = async (path) => {
  let ref = storageRef.child(path);
  return ref.listAll().then(dir => dir.items)
};

uploadFile = async (path, file, mimetype) => {
  return storageRef
    .child(path)
    .put(file, { contentType: mimetype })
    .then(snapshot => {
      // snapshot represents the uploaded file
      return snapshot.ref.getDownloadURL().then();
    })
    .catch(error => {
      console.error(error)
      return error;
    });
};

deleteFile = (nameFile) => {
  storageRef.child(`${nameFile}`).delete().then(() => {
    console.log('file deleted:', nameFile);
    // File deleted successfully
  }).catch(error => {
    // Uh-oh, an error occurred!
    console.log('deleteFile', error);
  });
};

deleteFolder = (path) => {
  console.log('deleteFolder: ', `${path}`);
  let ref = storageRef.child(`${path}`);
  ref.listAll()
    .then(dir => {
      dir.items.forEach(fileRef => {
        deleteFile(`${path}/${fileRef.name}`);
      });
      dir.prefixes.forEach(folderRef => {
        deleteFolder(folderRef.fullPath);
      })
    })
    .catch(error => {
      console.log('deleteFolder', error);
    });
}

module.exports = {
  deleteFolder,
  uploadFile
};