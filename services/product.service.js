const productModel = require('../models/product.model')

module.exports = {
  find: async (query) => {
    const titleRegex = new RegExp(query.title, 'i')
    const result = await productModel.find({ title: titleRegex, ...query.category ? { category: query.category } : {} }).populate('categories')

    return result
  },
  findOne: async (productId) => {
    const result = await productModel.findById(productId).populate('category')

    return result
  },
  create: async (data) => {
    const result = await productModel.create(data)

    return result
  },
  update: async (productId, data) => {
    const result = await productModel.findByIdAndUpdate(productId, data, { new: true })

    return result
  },
  delete: async (productId) => {
    await productModel.findByIdAndDelete(productId).exec()
  }
}
