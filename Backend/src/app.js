const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/api/posts", upload.single("image"), async (req, res) => {
  const { title, price, description, category } = req.body;
  const image = await uploadFile(req.file.buffer);
  const posts = await postModel.create({
    image: image.url,
    title,
    price,
    description,
    category,
  });
  res.status(201).json({
    message: "Post created successfully",
    posts,
  });
});

app.get("/api/posts", async (req, res) => {
  const post = await postModel.find();
  res.status(200).json({
    message: "Posts retrieved successfully",
    post,
  });
});

app.delete("/api/posts/:id", async (req, res) => {
  const id = req.params.id;
  await postModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Post deleted Successfully",
  });
});

app.patch("/api/posts/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  await postModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: "Post updated",
  });
});
module.exports = app;
