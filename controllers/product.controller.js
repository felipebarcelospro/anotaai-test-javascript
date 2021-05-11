const productService = require('../services/product.service')

module.exports = {
  find: async (request, response) => {
    const query = request.query

    const result = await productService.find(query)

    return response.status(200).json(result)
  },
  findOne: async (request, response) => {
    const { id } = request.params

    const result = await productService.findOne(id)

    return response.status(200).json(result)
  },
  create: async (request, response) => {
    const requiredFields = ['title', 'description', 'price']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(200).json({ message: new Error(`${field} is missing`) })
      }
    }

    const { title, description, price, category } = request.body

    const result = await productService.create({ title, description, price, category })

    return response.status(201).json(result)
  },
  update: async (request, response) => {
    const requiredFields = ['title', 'description', 'price']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(200).json({ message: new Error(`${field} is missing`) })
      }
    }

    const { id } = request.params
    const { title, description, price, category } = request.body

    const result = await productService.update(id, { title, description, price, category })

    return response.status(200).json(result)
  },
  delete: async (request, response) => {
    const { id } = request.params

    await productService.delete(id)

    return response.status(200)
  }
}
