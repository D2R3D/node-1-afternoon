const express = require('express')
const getProducts = require('./getProducts')
const getPorudct = require('./getProduct')
const app = express()
const port = 3001;


app.get('api/products', getProducts)
app.get('api/product/:id', getProduct)



app.listen(port, () => {
    console.log(`Server is lit on: ${port}`)
})