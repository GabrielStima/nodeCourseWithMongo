const bcrypt = require("bcrypt");
const { passwordGenerate } = require("../../src/services/passwordGenerate");
const password = "1234";
const generatedPassword = passwordGenerate(password);

describe("Password Generate", () => {
  it("should be return a string", () => {
    expect(typeof generatedPassword).toBe("string");
  });

  it("should be equal", async () => {
    await bcrypt.compare(password, generatedPassword, (error, isEqual) => {
      expect(isEqual).toBeTruthy();
    });
  });
});
