const mongoose = require("mongoose");
require("../models/Post");
const Post = mongoose.model("posts");

module.exports = {
  create: async (request, response) => {
    try {
      const newPost = {
        title: request.body.title,
        slug: request.body.slug,
        description: request.body.description,
        content: request.body.content,
        category: request.body.category,
      };

      const post = await new Post(newPost).save();
      response.status(201).json(post);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  list: async (request, response) => {
    try {
      const postsList = await Post.find().populate("category");
      response.json(postsList);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  listByCategory: async (request, response) => {
    try {
      const postsList = await Post.find({
        category: request.params.id,
      }).populate("category");
      response.json(postsList);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  update: async (request, response) => {
    try {
      const post = await Post.findOne({ _id: request.params.id });

      post.title = request.body.title;
      post.slug = request.body.slug;
      post.description = request.body.description;
      post.content = request.body.content;
      post.category = request.body.category;

      const postUpdated = await post.save();
      response.json(postUpdated);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  delete: async (request, response) => {
    try {
      await Post.deleteOne({ _id: request.params.id });
      response.sendStatus(204);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
