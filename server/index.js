const express = require('Express')
const getProducts = require('./getProducts')
const app = express()
const getProduct = require('./getProduct')


app.get('/api/products', getProducts)
// app.get('/api/products/?price', getProduct)

app.get('/api/products/:id', getProduct)


app.listen(5125, () => console.log('5125 activated'))
