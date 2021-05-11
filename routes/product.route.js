const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

router.get('/', productController.find)
router.get('/:id', productController.findOne)
router.post('/', productController.create)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)

module.exports = router
