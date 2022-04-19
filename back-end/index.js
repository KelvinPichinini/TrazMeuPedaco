const express = require("express");
const bodyParser = require('body-parser');
const productsRouter = require('./routes/productsRouter');
const employeesRouter = require('./routes/employeesRouter');
const customersRouter = require('./routes/customersRouter');

require('dotenv').config()

const app = express();
app.use(bodyParser.json());

app.use('/products',productsRouter);
app.use('/employees',employeesRouter);
app.use('/customers',customersRouter);


app.listen(process.env.PORT,() => {
    console.log(`Ouvindo na porta ${ process.env.PORT }`);

})