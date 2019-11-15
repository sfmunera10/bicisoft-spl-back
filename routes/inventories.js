var express = require('express');
var router = express.Router();
var inventory = require('../controllers/inventoryController.js');
 
/* GET inventory listing. */
router.get('/',inventory.findAll);

/* GET inventory item by QR code */
router.get('/find-qr/:qr',inventory.findQr);

/* GET one inventory. */
router.get('/find-id/:id',inventory.findOne);
  
/* POST inventory. */
router.post('/',inventory.create);
 
/* update inventory. */
router.put('/:id',inventory.update);
 
/* DELETE inventory. */
router.delete('/:id',inventory.destroy);
 
module.exports = router;