const bcrypt = require("bcrypt");
const { authGenerete } = require("./authGenerete");

module.exports = {
  comparePwd: (sendPwd, user, callback) => {
    bcrypt.compare(sendPwd, user.password, (error, isEqual) => {
      if (isEqual) {
        callback(true, { token: authGenerete(user._id) }, null);
      } else {
        callback(false, null, "Wrong password");
      }
    });
  },
};
