const productModel = {
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: { type: Number, min: [0, 'Pice must be positive.'] },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: { type: Number, default: 0 },
    inStore: { type: Number, default: 0 },
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL'],
  },
}

module.exports = productModel
