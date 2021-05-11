const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/category.controller')

router.post('/', categoryController.create)
router.put('/:id', categoryController.update)

module.exports = router
