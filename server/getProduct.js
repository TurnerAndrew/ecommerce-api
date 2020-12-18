const products = require('../products.json')

const getProduct = (req, res) => {
    const id = req.params.id
    const product = products.find((element) => element.id === +id)

    if(product) {
        return res.status(200).send(product)
    } else res.status(404).send('No such product exists.')
}

module.exports = getProduct
