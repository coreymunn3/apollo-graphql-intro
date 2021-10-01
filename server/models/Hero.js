const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema(
  {
    text: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Hero', HeroSchema);
