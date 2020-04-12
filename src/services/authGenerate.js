const jwt = require("jsonwebtoken");

module.exports = {
  authGenerate: (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300,
    });
  },
};
