const mongoose = require('mongoose');

const Category = new mongoose.Schema({
  image: String,
  categoryName: String,
  slug: String,
});

module.exports = mongoose.model('Category', Category);
