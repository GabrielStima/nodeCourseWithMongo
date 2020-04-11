const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");

module.exports = {
  create: async (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        const newUser = {
          name: request.body.name,
          email: request.body.email,
          password: request.body.password,
        };
        const user = await new User(newUser).save();
        response.status(201).json(user);
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  list: async (request, response) => {
    const authorization = request.headers.authorization;

    try {
      if (authorization) {
        const users = await User.find();
        response.json(users);
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  update: async (request, response) => {
    const { authorization } = request.headers;

    try {
      if (authorization) {
        const user = await User.findOne({ _id: request.params.id });

        user.name = request.body.name;
        user.email = request.body.email;
        user.password = request.body.password;

        const updatedUser = await user.save();

        response.json(updatedUser);
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
        await User.deleteOne({ _id: request.params.id });
        response.sendStatus(204);
      } else {
        throw new Error("Not authorizate");
      }
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
