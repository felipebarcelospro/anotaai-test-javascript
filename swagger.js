require('dotenv/config')

const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: '1.0.0',
    title: 'Anota Ai - Test Javascript by Felipe Barcelos',
    description: 'Documentation created for preview'
  },
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json']
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/product.route.js', './routes/category.route.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app') // Your project's root file
})
