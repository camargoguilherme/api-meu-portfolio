const express = require('express');
const routes = express.Router();

const AboutRoute = require('./AboutRoute');
const BlogRoute = require('./BlogRoute');
const DetailRoute = require('./DetailRoute');
const LoginRoute = require('./LoginRoute');
const MediaRoute = require('./MediaRoute');
const MenuRoute = require('./MenuRoute');
const PortfolioRoute = require('./PortfolioRoute');
const ProfileRoute = require('./ProfileRoute');
const SkillRoute = require('./SkillRoute');
const UserRoute = require('./UserRoute');

routes.get('/', (req, res) => {
	res.json({ status: true, message: 'api is running', version: '1.0.0' })
})

routes.use(LoginRoute);
routes.use(AboutRoute);
routes.use(BlogRoute);
routes.use(DetailRoute);
routes.use(MediaRoute);
routes.use(MenuRoute);
routes.use(PortfolioRoute);
routes.use(ProfileRoute);
routes.use(SkillRoute);
routes.use(UserRoute);

module.exports = routes;