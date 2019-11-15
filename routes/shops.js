var express = require('express');
var router = express.Router();
var shop = require('../controllers/shopController.js');
 
/* GET shop listing. */
router.get('/',shop.findAll);

/* GET all repair shops listing. */
router.get('/repair',shop.findAllRepair);

/* GET all rent shops listing. */
router.get('/rent',shop.findAllRent);

/* GET one shop. */
router.get('/find-id/:id',shop.findOne);

/* GET one shop by name. */
router.get('/find-name/:name',shop.findOneByName);
  
/* POST shop. */
router.post('/',shop.create);
 
/* update shop. */
router.put('/:id',shop.update);
 
/* DELETE shop. */
router.delete('/:id',shop.destroy);
 
module.exports = router;