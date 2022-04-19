const express = require('express');
const Employees = require('../controllers/employees_controller');
const router = express.Router();

router.get('/', Employees.getAll)
router.post('/', Employees.add)
router.get('/:id', Employees.getById)
router.delete('/:id',Employees.remove)
router.put('/:id',Employees.edit)

module.exports = router;