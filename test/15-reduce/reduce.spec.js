const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  addItems,
  flattenArray,
  generateTally,
  arrayToObject,
} = require("../../exercises/15-reduce/reduce");

describe("exercises/15-reduce/reduce.js", () => {
  describe("addItems()", () => {
    it("should add up all the numbers and return the total", () => {
      const total = addItems([1, 2, 3]);
      const negativeTotal = addItems([-10, 5, 5]);
      expect(total).to.equal(6);
      expect(negativeTotal).to.equal(0);
    });
  });
  describe("flattenArray()", () => {
    it("should return a flattened array (an array that is not multidimensional)", () => {
      const flat = flattenArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]);
      expect(flat).to.be.equalTo([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
  describe("generateTally()", () => {
    it("should return an object that contains a tally of how many times an item occurs in an array", () => {
      const tally = generateTally([
        "es6",
        "es6",
        "es6",
        "es5",
        "react",
        "angular",
        "vue",
      ]);
      expect(tally).to.deep.equal({
        es6: 3,
        es5: 1,
        react: 1,
        angular: 1,
        vue: 1,
      });
    });
  });
  describe("arrayToObject()", () => {
    it("should transform an array of objects to an object where each key is the id and the value is the original object", () => {
      const peopleArray = [
        { id: 123, name: "dave", age: 23 },
        { id: 456, name: "chris", age: 23 },
        { id: 789, name: "bob", age: 23 },
        { id: 101, name: "tom", age: 23 },
        { id: 102, name: "tim", age: 23 },
      ];
      const peopleObject = {
        123: { id: 123, name: "dave", age: 23 },
        456: { id: 456, name: "chris", age: 23 },
        789: { id: 789, name: "bob", age: 23 },
        101: { id: 101, name: "tom", age: 23 },
        102: { id: 102, name: "tim", age: 23 },
      };
      const arrOfObj = arrayToObject(peopleArray);
      expect(arrOfObj).to.deep.equal(peopleObject);
    });
  });
});
