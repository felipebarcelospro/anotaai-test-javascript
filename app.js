require('dotenv/config')

const express = require('express')

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
  }

  database () {
    mongooseConfig()
  }

  routes () {
    this.express.use('/products', productRoute)
    this.express.use('/categories', categoryRoute)
  }

  start () {
    this.express.listen(3000, () => {
      console.log('Server listen on port 3000')
    })
  }
}

module.exports = new App().express
