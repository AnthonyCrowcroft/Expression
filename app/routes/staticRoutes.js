var Express      = require('express');
var path         = require('path');

//establish router for static files in the public directory
var router = Express.Router();
var staticPath = path.resolve(__dirname, '../../', 'public');
router.use(Express.static(staticPath));

//returns router to be used in server.js
module.exports = router;