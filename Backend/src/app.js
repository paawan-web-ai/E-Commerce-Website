const express = require("express");
const postRouter = require("../src/routes/post.routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/posts", postRouter);

module.exports = app;
