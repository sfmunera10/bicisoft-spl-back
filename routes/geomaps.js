var express = require('express');
var router = express.Router();
var geomap = require('../controllers/geomapController.js');
 
/* GET geomap listing. */
router.get('/',geomap.findAll);

/* GET one geomap. */
router.get('/find-id/:id',geomap.findOne);

/* GET one geomap by name. */
router.get('/find-name/:name',geomap.findOneByName);
  
/* POST geomap. */
router.post('/',geomap.create);
 
/* update geomap. */
router.put('/:id',geomap.update);
 
/* DELETE geomap. */
router.delete('/:id',geomap.destroy);
 
module.exports = router;