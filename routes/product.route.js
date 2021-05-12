const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

router.get('/products', productController.find)
router.get('/products/:id', productController.findOne)
router.post('/products', productController.create)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.delete)

module.exports = router
