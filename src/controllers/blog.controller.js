import {
  createBlogPostService,
  editBlogPostService,
  getBlogPostService,
  getBlogPostsService,
  deleteBlogPostService,
} from "../services/blog.service.js";

export const createBlogPost = async (request, response) => {
  try {
    const { title, category, snippet, content } = request.body;
    const result = await createBlogPostService({
      title,
      category,
      snippet,
      content,
    });

    const { status, message, post, success } = result;
    return response.status(status).json({ message, success, post });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error creating blog post" });
  }
};

export const getBlogPosts = async (request, response) => {
  try {
    const result = await getBlogPostsService();
    const { status, message, posts, success } = result;
    return response.status(status).json({ message, success, posts });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error getting blog posts" });
  }
};

export const getBlogPost = async (request, response) => {
  const { id } = request.params;
  try {
    const result = await getBlogPostService(id);
    const { status, message, post, success } = result;
    return response.status(status).json({ message, success, post });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error getting blog post" });
  }
};

export const editBlogPost = async (request, response) => {
  const { id } = request.params;
  const { title, content, category, snippet, featured } = request.body;
  try {
    const result = await editBlogPostService({
      title,
      content,
      category,
      snippet,
      featured,
      id,
    });
    const { status, message, post, success } = result;
    return response.status(status).json({ message, success, post });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error updating blog post" });
  }
};

export const deleteBlogPost = async (request, response) => {
  const { id } = request.params;
  try {
    const result = await deleteBlogPostService({ id });
    const { status, message, success, error } = result;
    return response.status(status).json({ message, success, error });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error deleting blog post" });
  }
};
