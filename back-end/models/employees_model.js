const connection = require('./connection');

const getAll = async () => {
    const [employees] = await connection.execute(
        'SELECT employee_id, name, cpf, admin, created_at FROM traz_meu_pedaco.employees'
    )
    return employees;    
}

const add = async (employee) => {
    const [result] = await connection.execute(
        'INSERT into traz_meu_pedaco.employees (name,cpf,password,email,admin) VALUES (?,?,?,?,?)',[employee.name, employee.cpf, employee.password, employee.email, employee.admin]
    );
    return result.insertId;
}

const getById = async (id) => {
    const [employees] = await connection.execute(
        'SELECT employee_id, name, cpf, admin, created_at FROM traz_meu_pedaco.employees WHERE employee_id = ?', [id]
    )
    return employees[0];    
}

const edit = async (id, newData) => {
    const { name, cpf, password, email, admin } = newData;
    const[result] = await connection.execute(
        'UPDATE traz_meu_pedaco.employees SET name = ?, cpf = ?, password = ?, email = ?, admin=? WHERE employee_id = ?',
         [name, cpf, password, email, admin, id]
    )
    return result;
}

const remove = async (id) => {
    const [result] = await connection.execute(
        'DELETE FROM traz_meu_pedaco.employees WHERE employee_id = ?',
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