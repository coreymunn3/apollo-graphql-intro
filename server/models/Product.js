const mongoose = require('mongoose');

const Product = new mongoose.Schema(
  {
    name: String,
    slug: String,
    image: String,
    rating: Number,
    price: Number,
    description: [String],
    stock: Number,
    onSale: Boolean,
    salePrice: Number,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', Product);
