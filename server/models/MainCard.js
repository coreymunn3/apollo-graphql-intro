const mongoose = require('mongoose');

const MainCardSchema = mongoose.Schema(
  {
    title: String,
    images: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('MainCard', MainCardSchema);
