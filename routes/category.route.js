const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/category.controller')

router.post('/categories/', categoryController.create)
router.put('/categories/:id', categoryController.update)

module.exports = router
