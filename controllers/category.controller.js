const categoryService = require('../services/category.service')

module.exports = {
  create: async (request, response) => {
    const requiredFields = ['title']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(200).json({ message: new Error(`${field} is missing`) })
      }
    }

    const result = await categoryService.create(request.body)

    return response.status(201).json(result)
  },
  update: async (request, response) => {
    const requiredFields = ['title']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(200).json({ message: new Error(`${field} is missing`) })
      }
    }

    const { id } = request.params

    const result = await categoryService.update(id, request.body)

    return response.status(200).json(result)
  }
}
