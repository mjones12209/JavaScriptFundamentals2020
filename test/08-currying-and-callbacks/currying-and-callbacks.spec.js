const expect = require("chai").expect;
const sinon = require("sinon");

const {
  multiplier,
  printNames,
  printer,
} = require("../../exercises/08-currying-and-callbacks/currying-and-callbacks");

describe("exercises/08-currying-and-callbacks/currying-and-callbacks.js", () => {
  describe("multiplier", () => {
    it("should multiply at once if passed two numbers as agruments", () => {
      const result = multiplier(3, 4);
      expect(result).be.equal(12);
    });
    it("should return a function if only passed once argument", () => {
      const result = multiplier(3);
      expect(result).to.be.a("function");
    });
    it("should multiply the two numbers if passed in a parameters in a separate set of parentheses (e.g. multiplier(3)(4))", () => {
      const result = multiplier(3)(4);
      expect(result).be.equal(12);
    });
  });
  describe("printNames()", () => {
    it("should call on a callback for each item in an array", () => {
      const callback = sinon.spy();
      printNames(["test", "test1", "test3"], callback);
      expect(callback.calledThrice).to.equal(true);
    });
    it('should `console.log` a name when the callback is the "printer" function', () => {
      expect(printer).to.be.a("function");
      expect(printer.toString()).to.include("console.log(");
      printNames(["Jamal", "Matina"], printer);
    });
  });
});
