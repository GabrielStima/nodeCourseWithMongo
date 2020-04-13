const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (request, response, next) => {
    const token = request.headers["x-access-token"];

    if (!token) {
      response.status(401).json({ auth: false, message: "Not authorizate" });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        response
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });
      }
      request.userId = decoded.id;
      next();
    });
  },
};
