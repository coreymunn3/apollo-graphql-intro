const mongoose = require('mongoose');

const MainCardSchema = mongoose.Schema({
  title: String,
  images: [String],
});

module.exports = mongoose.model('MainCard', MainCardSchema);
