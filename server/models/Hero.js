const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
  text: String,
  image: String,
});

module.exports = mongoose.model('Hero', HeroSchema);
