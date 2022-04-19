const Customers = require('../services/customers_service');

const getAll = async (_req, res) => {
    const customers = await Customers.getAll();
    return res.status(200).json(customers);
}

const add = async (req, res) => {
    const newCustomer = req.body;
    const result = await Customers.add(newCustomer)
    return res.status(201).json({id: result});
}

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Customers.getById(id)
    if (result) {
        return res.status(200).json(result);
    }
    else {
        return res.status(404).json({message: 'customer not found'})
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await Customers.edit(id, newData);
    if (result) {
        return res.status(200).json({message: 'Successfully updated'});
    }
    else {
        return res.status(404).json({message: 'customer not found'})
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await Customers.remove(id);
    if (result) {
        return res.status(200).json({message: 'Successfully deleted'});
    } else {
        return res.status(404).json({message: 'customer not found'})
    }
}

module.exports = {
    getAll,
    add,
    getById,
    edit,
    remove
}