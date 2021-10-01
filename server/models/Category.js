const mongoose = require('mongoose');

const Category = new mongoose.Schema(
  {
    image: String,
    categoryName: String,
    slug: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Category', Category);
