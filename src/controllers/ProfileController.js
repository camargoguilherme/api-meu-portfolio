const Profile = require('../models/Profile');
const fs = require('fs');
const { deleteFiles } = require('../utility');

class ProfileController {

  async index(req, res) {
    await Profile.find({}, (error, profiles) => {
      if (error)
        return res.status(500).json({ message: "Internal Server Error", error });
      return res.status(200).json({ profiles, quantity: profiles.length });
    })
  }

  async store(req, res) {
    const { avatar, curriculum } = req.files;
    const profile = { ...req.body };
    let pathToEmpty = '';
    if (avatar) {
      const { path, filename, mimetype, destination } = avatar[0];

      const file = fs.readFileSync(path);
      const pathFile = `profile/avatar/${filename}`;

      profile['avatar'] = await uploadFile(pathFile, file, mimetype)
      pathToEmpty = destination;
    }
    if (curriculum) {
      const { path, filename, mimetype, destination } = curriculum[0];

      const file = fs.readFileSync(path);
      const pathFile = `profile/curriculum/${filename}`;

      profile['curriculum'] = await uploadFile(pathFile, file, mimetype)
      pathToEmpty = destination;
    }

    deleteFiles(pathToEmpty);

    Profile.create(profile)
      .then(profile => {
        return res.status(201).json({ message: 'Profile created successfully', profile })
      }).catch(error => {
        return res.status(500).json({ message: 'error at save profile', error })
      });
  }

  async update(req, res) {
    const { avatar, curriculum } = req.files;

    const profile = { ...req.body };

    if (avatar) {
      const { path, filename, mimetype, destination } = avatar[0];

      const file = fs.readFileSync(path);
      const pathFile = `profile/avatar/${filename}`;

      req.body['avatar'] = await uploadFile(pathFile, file, mimetype)
      deleteFiles(destination);
    }
    if (curriculum) {
      const { path, filename, mimetype, destination } = curriculum[0];

      const file = fs.readFileSync(path);
      const pathFile = `profile/curriculum/${filename}`;

      req.body['curriculum'] = await uploadFile(pathFile, file, mimetype)
      deleteFiles(destination);
    }

    Profile.findOne(req.params.id,
      (error, profile) => {
        if (error)
          return res.status(500).json({ message: "Internal Server Error", error });

        if (profile) {
          const keys = Object.keys(req.body);

          keys.map(key => {
            profile[key] = req.body[key]
          })

          profile.save()
            .then(profile => {
              return res.status(200).json({ message: 'Profile updated successfully', profile })
            }).catch(error => {
              return res.status(500).json({ message: 'error at update profile', error })
            });
        } else {
          return res.status(404).json({ message: 'Profile not found', params: { ...req.params, ...req.query } })
        }
      })
  }

  async show(req, res) {
    Profile.findById(req.params.id,
      (error, profile) => {
        if (error)
          return res.status(404).json({ message: 'Profile not found', params: { ...req.params, ...req.query } })
        return res.status(200).json({ message: 'Profile found', profile })
      });
  }

  async delete(req, res) {
    await Profile.findByIdAndDelete(req.params.id, (error, profile) => {
      if (error)
        return res.status(500).json({ message: "Internal Server Error", error })

      if (!profile)
        return res.status(404).json({ message: "Profile not found", params: { ...req.params, ...req.query } })
      deleteFolder('profile');
      return res.status(200).json({ message: "Profile deleted successfully", profile });
    })
  }

  // async deleteAll(req, res) {
  //   await Profile.find({}, (error, profile) => {
  //     if (error)
  //       return res.status(500).json({ message: "Internal Server Error", error })
  //     if (!profile)
  //       return res.status(404).json({ message: "Profiles not found" })
  //     Promise.all(
  //       profile.map(profile => {
  //         const profileDeleted = { ...profile };
  //         deleteFolder('profile');
  //         profile.remove();
  //         return profileDeleted
  //       })
  //     ).then(profileDeleted => {
  //       return res.status(200).json({ message: "Produtcs deleted successfully", profile: profileDeleted, quantity: profile.length });
  //     })
  //   })
  // }

}

module.exports = new ProfileController();