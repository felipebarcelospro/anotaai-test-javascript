const categoryService = require('../services/category.service')

module.exports = {
  create: async (request, response) => {
    const requiredFields = ['title']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return response.status(200).json({ message: new Error(`${field} is missing`) })
      }
    }

    const { title } = request.body

    const result = await categoryService.create({ title })

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
    const { title } = request.body

    const result = await categoryService.update(id, { title })

    return response.status(200).json(result)
  }
}
