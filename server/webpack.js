// Angular Libraries
angular = require('angular');
require('ui-router');

require('../client/app/app.js');

require('../client/css/style.css');
require('../client/css/font-awesome.min.css');
require('../client/css/expression.css');

//Require all Components
function requireAll(reqCtx) {reqCtx.keys().forEach(reqCtx);}

//Everything else
requireAll(require.context('../client/app', true, /\.js$/));

requireAll(require.context('../client/res/', true, /\.*$/));
