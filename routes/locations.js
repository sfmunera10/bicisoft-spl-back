var express = require('express');
var router = express.Router();
var location = require('../controllers/locationController.js');
 
/* GET location listing. */
router.get('/',location.findAll);

/* GET one location. */
router.get('/find-id/:id',location.findOne);

/* GET one location by address. */
router.get('/find-address/:address',location.findOneByAddress);
  
/* POST location. */
router.post('/',location.create);
 
/* update location. */
router.put('/:id',location.update);
 
/* DELETE location. */
router.delete('/:id',location.destroy);
 
module.exports = router;