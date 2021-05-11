const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
})

module.exports = model('Product', ProductSchema)
