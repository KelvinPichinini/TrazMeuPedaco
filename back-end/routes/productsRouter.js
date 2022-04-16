const express = require('express');
const Products = require('../controllers/products_controller');
const router = express.Router();

router.get('/', Products.getAll)
router.post('/', Products.add)
router.get('/:id', Products.getById)

module.exports = router;