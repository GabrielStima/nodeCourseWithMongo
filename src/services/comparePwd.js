const bcrypt = require("bcrypt");
const { authGenerate } = require("./authGenerate");

module.exports = {
  comparePwd: (sendPwd, user, callback) => {
    bcrypt.compare(sendPwd, user.password, (error, isEqual) => {
      if (isEqual) {
        callback(true, { token: authGenerate(user._id) }, null);
      } else {
        callback(false, null, "Wrong password");
      }
    });
  },
};
