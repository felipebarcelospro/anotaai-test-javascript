const categoryModel = require('../models/category.model')

module.exports = {
  create: async (data) => {
    const result = await categoryModel.create(data)

    return result
  },
  update: async (categoryId, data) => {
    const result = await categoryModel.findByIdAndUpdate(categoryId, data, { new: true })

    return result
  }
}
