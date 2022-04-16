const Products = require('../services/products_service');

const getAll = async (_req, res) => {
    const products = await Products.getAll();
    return res.status(200).json(products);
}

const add = async (req, res) => {
    const newProduct = req.body;
    const result = await Products.add(newProduct)
    return res.status(201).json({id: result});
}

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Products.getById(id)
    if (result) {
        return res.status(200).json(result);
    }
    else {
        return res.status(404).json({message: 'Product not found'})
    }
}

const edit = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const result = await Products.edit(id, newData);
    if (result) {
        return res.status(200).json({message: 'Successfully updated'});
    }
    else {
        return res.status(404).json({message: 'Product not found'})
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await Products.remove(id);
    if (result) {
        return res.status(200).json({message: 'Successfully deleted'});
    } else {
        return res.status(404).json({message: 'Product not found'})
    }
}

module.exports = {
    getAll,
    add,
    getById,
    edit,
    remove
}