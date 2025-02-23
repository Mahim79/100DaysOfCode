const express = require('express');
const productsRouter = require('./productsRouter');
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.use("/products",productsRouter)

app.listen(PORT,()=> console.log(`server is running at http://localhost:${PORT}`)
)