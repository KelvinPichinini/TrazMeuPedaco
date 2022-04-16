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
    return result.insertId;
}

const getById = async (id) => {
    const [products] = await connection.execute(
        'SELECT product_id, name, price, available, description FROM traz_meu_pedaco.products WHERE product_id = ?', [id]
    )
    return products[0];    
}

const edit = async (id, newData) => {
    const { name, price, available, description } = newData;
    const[result] = await connection.execute(
        'UPDATE traz_meu_pedaco.products SET name = ?, price = ?, available = ?, description = ? WHERE product_id = ?',
         [name, price, available, description, id]
    )
    return result;
}

const remove = async (id) => {
    const [result] = await connection.execute(
        'DELETE FROM traz_meu_pedaco.products WHERE product_id = ?',
         [id]
    )
    return result.affectedRows;
}


module.exports = {
    getAll,
    add,
    getById,
    edit,
    remove
}