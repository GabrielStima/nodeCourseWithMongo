const mongoose = require("mongoose");
const app = require("./app");
const connectMongoDB = require("./database/connection");

(async () => {
  await connectMongoDB();
  if (mongoose.connection.readyState === 1) {
    app.listen(3333, () => {
      console.log("Server online");
    });
  } else {
    console.log(`Status to connection is ${mongoose.connection.readyState}`);
  }
})();
