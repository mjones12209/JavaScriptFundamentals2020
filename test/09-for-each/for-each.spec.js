const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  forEach,
  showFirstAndLast,
} = require("../../exercises/09-for-each/for-each.js");

describe("exercises/09-for-each/for-each.js", () => {
  describe("forEach()", () => {
    it("should loop over an array and apply a callback to each item", () => {
      let numbersDoubled = [];
      let suppliedArr = [];
      let arrIndex = [];
      forEach([1, 2, 3], (number, idx, arr) => {
        arrIndex.push(idx);
        numbersDoubled.push(number * 2);
        suppliedArr = arr;
      });
      expect(arrIndex).to.be.equalTo([0, 1, 2]);
      expect(suppliedArr).to.be.equalTo([1, 2, 3]);
      expect(numbersDoubled).to.be.equalTo([2, 4, 6]);
    });
  });

  describe("showFirstAndLast()", () => {
    it("should print only the first and last letter of a string", () => {
      const abbreviatedName = showFirstAndLast([
        "colt",
        "matt",
        "tim",
        "udemy",
      ]);
      expect(abbreviatedName).to.be.equalTo(["ct", "mt", "tm", "uy"]);
    });
  });
});
