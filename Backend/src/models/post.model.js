const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number,
  description: String,
  category: String,
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
