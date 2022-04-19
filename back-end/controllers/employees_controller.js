const Employees = require('../services/employees_service');

const getAll = async (_req, res) => {
    const employees = await Employees.getAll();
    return res.status(200).json(employees);
}

const add = async (req, res) => {
    const newEmployee = req.body;
    const result = await Employees.add(newEmployee)
    return res.status(201).json({id: result});
}

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Employees.getById(id)
    if (result) {
        return res.status(200).json(result);
    }
    else {
        return res.status(404).json({message: 'employee not found'})
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await Employees.edit(id, newData);
    if (result) {
        return res.status(200).json({message: 'Successfully updated'});
    }
    else {
        return res.status(404).json({message: 'employee not found'})
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await Employees.remove(id);
    if (result) {
        return res.status(200).json({message: 'Successfully deleted'});
    } else {
        return res.status(404).json({message: 'employee not found'})
    }
}

module.exports = {
    getAll,
    add,
    getById,
    edit,
    remove
}