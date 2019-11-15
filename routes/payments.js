var express = require('express');
var router = express.Router();
var payment = require('../controllers/paymentController.js');
 
/* GET payment listing. */
router.get('/',payment.findAll);

/* GET one payment. */
router.get('/find-id/:id',payment.findOne);
  
/* POST payment. */
router.post('/',payment.create);
 
/* update payment. */
router.put('/:id',payment.update);
 
/* DELETE payment. */
router.delete('/:id',payment.destroy);
 
module.exports = router;