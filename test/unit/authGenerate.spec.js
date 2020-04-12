const jwt = require("jsonwebtoken");
const { authGenerate } = require("../../src/services/authGenerate");
const id = "1234";
const token = authGenerate(id);

describe("Generate Authorization", () => {
  it("should be return a string", () => {
    expect(typeof token).toBe("string");
  });

  it("should be equal a id", () => {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      expect(decoded.id).toEqual(id);
    });
  });
});
