const express = require("express");
const postRouter = express.Router();
const postRoutes = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), postRoutes.createPostController);
postRouter.get("/", postRoutes.getPostController);
module.exports = postRouter;
