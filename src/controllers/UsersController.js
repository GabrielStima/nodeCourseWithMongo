const mongoose = require("mongoose");
const { passwordGenerate } = require("../services/passwordGenerate");
require("../models/User");
const User = mongoose.model("users");

module.exports = {
  create: async (request, response) => {
    try {
      const newUser = {
        name: request.body.name,
        email: request.body.email,
        password: passwordGenerate(request.body.password),
      };
      const user = await new User(newUser).save();
      response.status(201).json(user);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  list: async (request, response) => {
    try {
      const users = await User.find();
      response.json(users);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  update: async (request, response) => {
    try {
      const user = await User.findOne({ _id: request.params.id });

      user.name = request.body.name;
      user.email = request.body.email;
      user.password = request.body.password;

      const updatedUser = await user.save();

      response.json(updatedUser);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },

  delete: async (request, response) => {
    try {
      await User.deleteOne({ _id: request.params.id });
      response.sendStatus(204);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
