const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function createPostController(req, res) {
  const { title, description, price, category } = req.body;

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
  });

  const createPost = await postModel.create({
    title,
    description,
    price,
    category,
    image: file.url,
  });

  res.status(200).json({
    message: "cart created",
    file,
    createPost,
  });
}

async function getPostController(req, res) {
  const posts = await postModel.find();

  res.status(200).json({
    post: posts,
  });
}

module.exports = {
  createPostController,
  getPostController,
};
