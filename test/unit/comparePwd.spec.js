const { comparePwd } = require("../../src/services/comparePwd");
const { passwordGenerate } = require("../../src/services/passwordGenerate");
const password = "1234";
const userObj = {
  id: 1,
  password: "",
};

describe("Compare Password", () => {
  it("should be truthy", () => {
    userObj.password = passwordGenerate(password);
    comparePwd(password, userObj, (isEqual) => {
      expect(isEqual).toBeTruthy();
    });
  });
});
