const mongoose = require('mongoose')

module.exports = async () => {
  const { MONGO_URI } = process.env

  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }

  await mongoose.connect(MONGO_URI, options)
}
