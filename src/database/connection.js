const mongoose = require("mongoose");
const adress = "localhost";
const db = "blogapp";

function connectMongoDB() {
    mongoose
      .connect(`mongodb://${adress}/${db}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("connection sucess"))
      .catch((err) => console.log("connection fail", err));
}

module.exports = connectMongoDB;