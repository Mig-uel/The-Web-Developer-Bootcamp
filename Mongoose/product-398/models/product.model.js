const productModel = {
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: { type: Number, min: 0 },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: { type: Number, default: 0 },
    inStore: { type: Number, default: 0 },
  },
}

module.exports = productModel
