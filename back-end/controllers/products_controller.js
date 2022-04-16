const Products = require('../services/products_service');

const getAll = async (_req, res) => {
    const products = await Products.getAll();
    return res.status(200).json(products);
}

const add = async (req, res) => {
    const newProduct = req.body;
    const result = await Products.add(newProduct)
    res.status(201).json(result);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Products.getById(id)
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(404).json({message: 'Product not found'})
    }
}

module.exports = {
    getAll,
    add,
    getById
}