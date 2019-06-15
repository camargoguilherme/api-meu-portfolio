const express = require('express'); 
const routes = express.Router();

const AboutRoute = require('./About');
const DetailRoute = require('./Detail');
const FileRoute = require('./File');
const MediaRoute = require('./Media');
const MenuRoute = require('./Menu');
const ProfileRoute = require('./Profile');
const SkillRoute = require('./Skill');
const UserRoute = require('./User');

routes.get('/', (req, res) =>{
    res.json({status: true, message: 'api is running'})
})

routes.use(AboutRoute);
routes.use(DetailRoute);
routes.use(FileRoute);
routes.use(MediaRoute);
routes.use(MenuRoute);
routes.use(ProfileRoute);
routes.use(SkillRoute);
//routes.use(UserRoute);

module.exports = routes;