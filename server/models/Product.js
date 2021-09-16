const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  rating: Number,
  price: Number,
  description: [String],
  stock: Number,
  onSale: Boolean,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});

module.exports = mongoose.model('Product', Product);
