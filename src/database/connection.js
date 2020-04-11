const mongoose = require("mongoose");

const databaseSelect = () => {
  if (process.env.NODE_ENV === "test") {
    return process.env.NAME_DATABASE_TEST;
  } else {
    return process.env.NAME_DATABASE;
  }
};

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
