const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../models/User");
const User = mongoose.model("users");

const authGenerete = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 300,
  });
};

module.exports = {
  authenticate: async (request, response) => {
    let user;

    try {
      user = await User.findOne({ email: request.body.email });

      if (!user) {
        throw new Error("User not found");
      }

      bcrypt.compare(request.body.password, user.password, (error, isEqual) => {
        try {
          if (isEqual) {
            response.json({ token: authGenerete(user._id) });
          } else {
            throw new Error("Wrong password");
          }
        } catch (err) {
          response.status(400).json({ error: err.message });
        }
      });
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  },
};
