const mongoose = require("mongoose");
const connectMongoDB = require("../../src/database/connection");

describe("Database Connection", () => {
  it("should be truthy", async () => {
    await connectMongoDB();
    expect(mongoose.connection.readyState === 1).toBeTruthy();
  });
});
