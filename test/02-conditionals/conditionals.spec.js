const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));
const {
  isEvenOrOdd,
  compareEquality,
  testStrictNotEqual,
  testLogicalAnd,
  testLogicalOr,
  caseInSwitch,
} = require("../../exercises/02-conditionals/conditionals");

describe("exercises/02-conditionals/conditionals.js", () => {
  describe("compareEquality()", () => {
    it("should compare the Equality of both arguments and return equal if both arguments are equal and if both arguments are not equal return not equal", () => {
      expect(compareEquality(5, "5")).equal("Not Equal");
      expect(compareEquality("5", "5")).equal("Equal");
      expect(compareEquality(5, 5)).equal("Equal");
    });
  });

  describe("testStrictNotEqual()", () => {
    it("should use  strict inequality operator and return the correct responses", () => {
      expect(testStrictNotEqual(17, 17)).to.equal("Equal"); // should return "Equal"
      expect(testStrictNotEqual("17", 17)).to.equal("Not Equal"); // should return "Not Equal"
      expect(testStrictNotEqual(12, "bob")).to.equal("Not Equal"); // should return "Not Equal"
      expect(testStrictNotEqual.toString().includes("!==")).equal(true);
    });
  });

  describe("testLogicalAnd()", () => {
    it("should use the logical And operator and return the correct responses", () => {
      expect(testLogicalAnd(9)).to.equal("Yes"); // should return "Yes"
      expect(testLogicalAnd(6)).to.equal("Yes"); // should return "Yes"
      expect(testLogicalAnd(10)).to.equal("No"); // should return "No"
      expect(testLogicalAnd(5)).to.equal("No"); // should return "No"
      expect(testLogicalAnd.toString()).includes("&&");
    });
  });

  describe("testLogicalOr()", () => {
    it("should use the logical Or operator and return the correct responses", () => {
      expect(testLogicalOr(0)).to.equal("No");
      expect(testLogicalOr(20)).to.equal("Yes");
      expect(testLogicalOr(25)).to.equal("Yes");
      expect(testLogicalOr.toString()).includes("||");
    });
  });
  describe("isEvenOrOdd()", () => {
    it("should return true if the number is an even number or false if the number is an odd number", () => {
      expect(isEvenOrOdd(2)).equal(true);
      expect(isEvenOrOdd(3)).equal(false);
    });
  });
  describe("caseInSwitch()", () => {
    it("should return print out the correct value when given a certain argument", () => {
      expect(caseInSwitch(1)).to.equal("ONE");
      expect(caseInSwitch(5)).to.equal("FIVE");
      expect(caseInSwitch(7)).to.equal("SEVEN");
      expect(caseInSwitch(50)).to.equal("PLEASE TRY AGAIN");
      expect(caseInSwitch(-1)).to.equal("PLEASE TRY AGAIN");
    });
  });
});
