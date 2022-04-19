const express = require('express');
const Customers = require('../controllers/customers_controller');
const router = express.Router();

router.get('/', Customers.getAll)
router.post('/', Customers.add)
router.get('/:id', Customers.getById)
router.delete('/:id',Customers.remove)
router.put('/:id',Customers.edit)

module.exports = router;