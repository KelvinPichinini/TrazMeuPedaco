const Products = require ('../models/products_model.js');

const getAll = async () => {
    const products = await Products.getAll();
    return products;

}

const add = async (product) => {
    const result = await Products.add(product);
    return result;
}

const getById = async (id) => {
    const result = await Products.getById(id);
    return result;
}

module.exports = {
    getAll,
    add,
    getById
}