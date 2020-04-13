const { databaseSelect } = require("../../src/services/databaseSelect");

describe("Database Select", () => {
  it("should be truthy", async () => {
    const database = databaseSelect();
    expect(database === process.env.NAME_DATABASE_TEST).toBeTruthy();
  });
});
