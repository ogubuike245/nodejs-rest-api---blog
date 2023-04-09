import express from "express";
import {
  createBlogPost,
  editBlogPost,
  getBlogPost,
  getBlogPosts,
  deleteBlogPost,
} from "../controllers/blog.controller.js";

const blogRouter = express.Router();

blogRouter.post("/create/post", createBlogPost);
blogRouter.get("/posts", getBlogPosts);
blogRouter.get("/post/:id", getBlogPost);
blogRouter.put("/edit/post/:id", editBlogPost);
blogRouter.delete("/delete/post/:id", deleteBlogPost);

export default blogRouter;
