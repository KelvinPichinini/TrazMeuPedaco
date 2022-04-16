const express = require("express");
const bodyParser = require('body-parser');
const productsRouter = require('./routes/productsRouter');

require('dotenv').config()

const app = express();
app.use(bodyParser.json());

app.use('/products',productsRouter);


app.listen(process.env.PORT,() => {
    console.log(`Ouvindo na porta ${ process.env.PORT }`);

})