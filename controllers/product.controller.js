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

    const result = await productService.create(request.body)

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

    const result = await productService.update(id, request.body)

    return response.status(200).json(result)
  },
  delete: async (request, response) => {
    const { id } = request.params

    await productService.delete(id)

    return response.status(200)
  }
}
