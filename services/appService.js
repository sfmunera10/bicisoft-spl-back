const prop = require('../environments/environments');
const appFactory = require('../factory/AppFactory');

var appService = {};

appService.getAppName = function(req, res){
    let app = appFactory(prop.environment);
    console.log(app.toString());
    res.send(app.toString())
};

module.exports = appService;