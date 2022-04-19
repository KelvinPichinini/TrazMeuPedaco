const Customers = require ('../models/customers_model.js');

const getAll = async () => {
    const customers = await Customers.getAll();
    return customers;

}

const add = async (employee) => {
    const result = await Customers.add(employee);
    return result;
}

const getById = async (id) => {
    const result = await Customers.getById(id);
    return result;
}

const edit = async (id, newData) => {
    const found = await getById(id);
    if (found) {
       const result = await Customers.edit(id, newData);
       return result;
    }
    else {
        return false
    }
}

const remove = async (id) => {
    const result = await Customers.remove(id);
    return result;
}

module.exports = {
    getAll,
    add,
    getById,
    edit,
    remove
}