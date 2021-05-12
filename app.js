require('dotenv/config')

const express = require('express')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const mongooseConfig = require('./config/mongoose.config')

const categoryRoute = require('./routes/category.route')
const productRoute = require('./routes/product.route')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
    this.start()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use('/api-docs', (req, res, next) => {
      swaggerFile.host = req.get('host')
      next()
    }, swaggerUi.serve, swaggerUi.setup(swaggerFile))
  }

  database () {
    mongooseConfig()
  }

  routes () {
    this.express.use(productRoute)
    this.express.use(categoryRoute)
  }

  start () {
    this.express.listen(3000, () => {
      console.log('Server listen on port 3000')
    })
  }
}

module.exports = new App().express
