const jwt = require("jsonwebtoken");

module.exports = {
  authGenerete: (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300,
    });
  },
};
