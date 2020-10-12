const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const { map, doubleValues, extractKey } = require("../../exercises/11-map/map");

describe("exercises/11-map/map.js", () => {
  describe("map()", () => {
    it("should loop over an array and return an array where each item is the result of a callback", () => {
      let suppliedArr;
      let arrIndex = [];
      const tripledValues = map([1, 2, 3], (number, index, array) => {
        arrIndex.push(index);
        suppliedArr = array;
        return number * 3;
      });
      expect(tripledValues).to.be.equalTo([3, 6, 9]);
      expect(arrIndex).to.be.equalTo([0, 1, 2]);
      expect(suppliedArr).to.be.equalTo([1, 2, 3]);
    });
  });
  describe("doubledValues()", () => {
    it("should return an array where each number in the array is doubled", () => {
      const doubledValues = doubleValues([2, 3, 4], (number) => {
        return number * 2;
      });
      expect(doubledValues).to.be.equalTo([4, 6, 8]);
    });
    it("should use JavaScript's built in .map()", () => {
      const funcStr = doubledValues.toString();
      expect(funcStr).to.contain(".map");
    });
  });
  describe("extractedName()", () => {
    it("should return an array of object, where each object just contains the name e.g. [{name: 'Ellie'}, { name: 'Tim' }]", () => {
      const extractedName = extractKey(
        [
          { name: "Ellie" },
          { name: "Tim" },
          { name: "Matt" },
          { name: "Colt" },
        ],
        "name"
      );
      expect(extractedName).to.be.equalTo(["Ellie", "Tim", "Matt", "Colt"]);
    });
    it("should use JavaScript's built in .map()", () => {
      const funcStr = extractKey.toString();
      expect(funcStr).to.contain(".map");
    });
  });
});
