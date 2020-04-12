const bcrypt = require("bcrypt");

module.exports = {
  passwordGenerate: (password) => {
    const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS));
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  },
};
