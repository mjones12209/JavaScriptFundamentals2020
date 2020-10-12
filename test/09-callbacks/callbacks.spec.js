const expect = require("chai").expect;

const {
  calculate,
  findFirst,
} = require("../../exercises/09-callbacks/callbacks");

describe("exercises/09-callbacks/09-callbacks.js", () => {
  describe("calculate()", () => {
    it("should use the callback", () => {
      const funcStr = calculate.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should return the result of a callback invoked on two numbers", () => {
      const add = (a, b) => {
        return a + b;
      };
      const result = calculate(5, 10, add);
      expect(result).to.equal(15);
    });
  });
  describe("findFirst()", () => {
    it("should use the callback", () => {
      const funcStr = findFirst.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should find the first number in an array that, when passed as an argument into a callback, returns true", () => {
      const isNumberEven = (num) => {
        if (num % 2 === 0) return true;
        else return false;
      };
      const result = findFirst([1, 3, 7, 8, 20], isNumberEven);
      expect(result).to.equal(8);
    });
  });
});
