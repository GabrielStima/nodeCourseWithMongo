const mongoose = require("mongoose");
require("../models/Category");
const Category = mongoose.model("categories");

module.exports = {
  create: async (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        const newCategory = {
          name: request.body.name,
          slug: request.body.slug,
        };

        const category = await new Category(newCategory).save();
        response.status(201).json(category);
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  list: async (request, response) => {
    try {
      const categories = await Category.find();
      response.json(categories);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  update: async (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        const category = await Category.findOne({ _id: request.params.id });

        category.name = request.body.name;
        category.slug = request.body.slug;

        const categoryUpdated = await category.save();
        response.json(categoryUpdated);
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  delete: async (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        await Category.deleteOne({ _id: request.params.id });
        response.sendStatus(204);
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
