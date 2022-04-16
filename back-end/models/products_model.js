const connection = require('./connection');

const getAll = async () => {
    const [products] = await connection.execute(
        'SELECT product_id, name, price, available, description FROM traz_meu_pedaco.products'
    )
    return products;    
}

const add = async (product) => {
    const [result] = await connection.execute(
        'INSERT into traz_meu_pedaco.products (name,price,available,description) VALUES (?,?,?,?)',[product.name, product.price, product.available, product.description]
    );
    return result;
}

const getById = async (id) => {
    const [products] = await connection.execute(
        'SELECT product_id, name, price, available, description FROM traz_meu_pedaco.products WHERE product_id = ?', [id]
    )
    return products[0];    
}


module.exports = {
    getAll,
    add,
    getById
}