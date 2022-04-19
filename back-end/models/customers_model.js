const connection = require('./connection');

const getAll = async () => {
    const [customers] = await connection.execute(
        'SELECT customer_id, name, cpf, cellphone, created_at FROM traz_meu_pedaco.customers'
    )
    return customers;    
}

const add = async (customer) => {
    const [result] = await connection.execute(
        'INSERT into traz_meu_pedaco.customers (name,cpf,password,email,cellphone) VALUES (?,?,?,?,?)',[customer.name, customer.cpf, customer.password, customer.email, customer.cellphone]
    );
    return result.insertId;
}

const getById = async (id) => {
    const [customers] = await connection.execute(
        'SELECT employee_id, name, cpf, cellphone, created_at FROM traz_meu_pedaco.customers WHERE employee_id = ?', [id]
    )
    return customers[0];    
}

const edit = async (id, newData) => {
    const { name, cpf, password, email, cellphone } = newData;
    const[result] = await connection.execute(
        'UPDATE traz_meu_pedaco.customers SET name = ?, cpf = ?, password = ?, email = ?, cellphone=? WHERE employee_id = ?',
         [name, cpf, password, email, cellphone, id]
    )
    return result;
}

const remove = async (id) => {
    const [result] = await connection.execute(
        'DELETE FROM traz_meu_pedaco.customers WHERE employee_id = ?',
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