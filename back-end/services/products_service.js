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

const edit = async (id, newData) => {
    const found = await getById(id);
    if (found) {
       const result = await Products.edit(id, newData);
       return result;
    }
    else {
        return false
    }
}

const remove = async (id) => {
    const result = await Products.remove(id);
    return result;
}

module.exports = {
    getAll,
    add,
    getById,
    edit,
    remove
}