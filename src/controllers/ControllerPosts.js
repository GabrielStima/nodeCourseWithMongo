const mongoose = require("mongoose");
require("../models/Post");
const Post = mongoose.model("posts");

module.exports = {
  create: (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        const newPost = {
          title: request.body.title,
          slug: request.body.slug,
          description: request.body.description,
          content: request.body.content,
          category: request.body.category,
        };

        new Post(newPost)
          .save()
          .then(() => response.end())
          .catch((err) =>
            response
              .status(400)
              .json({ error: err, message: "Fail in register new post" })
          );
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  list: (request, response) => {
    Post.find()
      .populate("category")
      .then((posts) => response.json(posts))
      .catch((err) =>
        response
          .status(404)
          .json({ error: err, message: "posts not found" })
      );
  },

  listByCategory: (request, response) => {
    Post.find({ category: request.params.id })
    .populate("category")
    .then((posts) => response.json(posts))
    .catch((err) =>
        response
          .status(404)
          .json({ error: err, message: "posts not found" })
      );
  },

  update: (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        Post.findOne({ _id: request.params.id })
          .then((post) => {
            post.title = request.body.title;
            post.slug = request.body.slug;
            post.description = request.body.description;
            post.content = request.body.content;
            post.category = request.body.category;

            post
              .save()
              .then(() => response.end())
              .catch((err) =>
                response
                  .status(400)
                  .json({ error: err, message: "fail to update post" })
              );
          })
          .catch((err) =>
            response
              .status(404)
              .json({ error: err, message: "post not found" })
          );
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  delete: (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        Post.findOne({ _id: request.params.id })
          .then((post) => {
            Post.deleteOne({ _id: post._id })
              .then(() => response.end())
              .catch((err) =>
                response
                  .status(400)
                  .json({ error: err, message: "fail to delete post" })
              );
          })
          .catch((err) =>
            response
              .status(404)
              .json({ error: err, message: "post not found" })
          );
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
