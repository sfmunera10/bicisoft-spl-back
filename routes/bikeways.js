var express = require('express');
var router = express.Router();
var bikeway = require('../controllers/bikewayController.js');
 
/* GET bikeway listing. */
router.get('/',bikeway.findAll);

/* GET one bikeway. */
router.get('/find-id/:id',bikeway.findOne);

/* GET one bikeway by name. */
router.get('/find-name/:name',bikeway.findOneByName);
  
/* POST bikeway. */
router.post('/',bikeway.create);
 
/* update bikeway. */
router.put('/:id',bikeway.update);
 
/* DELETE bikeway. */
router.delete('/:id',bikeway.destroy);
 
module.exports = router;