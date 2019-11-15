var express = require('express');
var router = express.Router();
var travel = require('../controllers/travelController.js');
 
/* GET travel listing. */
router.get('/',travel.findAll);

/* GET travel listing. */
router.get('/LT',travel.findAllLT);

/* GET one travel. */
router.get('/find-id/:id',travel.findOne);
  
/* POST travel. */
router.post('/',travel.create);
 
/* update travel. */
router.put('/:id',travel.update);
 
/* DELETE travel. */
router.delete('/:id',travel.destroy);
 
module.exports = router;