const mongoose = require("mongoose");
const { comparePwd } = require("../services/comparePwd");
require("../models/User");
const User = mongoose.model("users");

module.exports = {
  authenticate: async (request, response) => {
    let user;

    try {
      user = await User.findOne({ email: request.body.email });

      if (!user) {
        throw new Error("User not found");
      }

      comparePwd(request.body.password, user, (isEquals, value, message) => {
        try {
          if (isEquals) {
            response.json(value);
          } else {
            throw new Error(message);
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
