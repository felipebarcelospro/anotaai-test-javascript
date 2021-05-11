const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
  title: {
    type: String,
    require: true
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, {
  timestamps: true
})

module.exports = model('Category', CategorySchema)
