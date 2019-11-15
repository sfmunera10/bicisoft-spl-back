var express = require('express');
var router = express.Router();
var ad = require('../controllers/adController.js');
 
/* GET ad listing. */
router.get('/',ad.findAll);

/* GET one ad. */
router.get('/find-id/:id',ad.findOne);

/* GET one ad by name. */
router.get('/find-name/:name',ad.findOneByName);
  
/* POST ad. */
router.post('/',ad.create);
 
/* update ad. */
router.put('/:id',ad.update);
 
/* DELETE ad. */
router.delete('/:id',ad.destroy);
 
module.exports = router;