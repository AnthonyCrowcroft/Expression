var Express      = require('express');
var path         = require('path');

//establish router for static files in the public directory
var router = Express.Router();
var staticPath = path.resolve(__dirname, '../../', 'public');
router.use(Express.static(staticPath));

//router.use('/js', Express.static(path.resolve(staticPath, '/js')));
//router.use('/lib', Express.static(path.resolve(staticPath, '/lib')));
//router.use('/css', Express.static(path.resolve(staticPath, '/css')));
//router.use('/html', Express.static(path.resolve(staticPath, '/html')));

router.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('index.html', { root: staticPath});
});
//returns router to be used in server.js
module.exports = router;