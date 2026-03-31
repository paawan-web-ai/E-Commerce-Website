const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "img is required for creating post"],
  },
  title: {
    type: String,
    required: [true, "title is required for creating an post "],
  },
  price: {
    type: Number,
    required: [true, "price is required for creating post"],
  },
  description: {
    type: String,
    required: [true, "description is required for creating post"],
  },
  category: {
    type: String,
    required: [true, "category is required for creating post"],
  },
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;
