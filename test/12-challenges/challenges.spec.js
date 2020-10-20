const chai = require("chai");
const expect = chai.expect;

const {
  findLongestWordLength,
  fearNotLetter,
} = require("../../exercises/12-challenges/challenges");

describe("exercises/12-challenges/challenges.js", () => {
  describe("findLongestWordLength()", () => {
    it("Return the length of the longest word in the provided sentence", () => {
      const ans = findLongestWordLength(
        "The quick brown fox jumped over the lazy dog"
      );
      expect(ans).to.equal(6);
      const ansTwo = findLongestWordLength(
        "What is the average airspeed velocity of an unladen swallow"
      );
      expect(ansTwo).to.equal(8);
    });
  });
  describe("fearNotLetter()", () => {
    it("Finds the missing letter in the passed letter range and return it", () => {
      expect(fearNotLetter("abce")).to.equal("d");
      expect(fearNotLetter("abcdefghjklmno")).to.equal("i");
      expect(fearNotLetter("stvwx")).to.equal("u");
      expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).to.be.undefined;
    });
  });
});
