const Employees = require ('../models/employees_model.js');

const getAll = async () => {
    const employees = await Employees.getAll();
    return employees;

}

const add = async (employee) => {
    const result = await Employees.add(employee);
    return result;
}

const getById = async (id) => {
    const result = await Employees.getById(id);
    return result;
}

const edit = async (id, newData) => {
    const found = await getById(id);
    if (found) {
       const result = await Employees.edit(id, newData);
       return result;
    }
    else {
        return false
    }
}

const remove = async (id) => {
    const result = await Employees.remove(id);
    return result;
}

module.exports = {
    getAll,
    add,
    getById,
    edit,
    remove
}