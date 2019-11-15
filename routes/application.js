var express = require('express');
var router = express.Router();
const app = require('../services/appService');
 
/* GET getAppName. */
router.get('/getAppName',app.getAppName);

module.exports = router;