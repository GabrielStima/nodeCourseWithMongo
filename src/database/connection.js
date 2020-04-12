const mongoose = require("mongoose");
const { databaseSelect } = require("../services/databaseSelect");

async function connectMongoDB() {
  await mongoose
    .connect(`mongodb://${process.env.ADDRESS}/${databaseSelect()}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection sucess"))
    .catch((err) => console.log("Connection fail", err));
}

module.exports = connectMongoDB;
