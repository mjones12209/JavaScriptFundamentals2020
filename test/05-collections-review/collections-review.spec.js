const expect = require("chai").expect;

const {
  createAnArray,
  uppercaseTargetWord,
  createGraduateObject,
} = require("../../exercises/05-collections-review/collections-review");

describe("exercises/05-collections-review/collections-review.js", () => {
  describe("createAnArray()", () => {
    it("should return an array", () => {
      const array = createAnArray();
      expect(array).to.be.an("array");
    });
    it("the first item in the returned array should be a string", () => {
      const array = createAnArray();
      expect(array[0]).to.be.a("string");
    });
    it("the second item in the returned array should be a function", () => {
      const array = createAnArray();
      expect(array[1]).to.be.a("function");
    });
    it("the last item in the returned array should be another array", () => {
      const array = createAnArray();
      expect(array[2]).to.be.an("array");
    });
  });

  describe("uppercaseTargetWord()", () => {
    it("should uppercase the target word", () => {
      expect(uppercaseTargetWord("first second third", 0)).to.equal(
        "FIRST second third"
      );
      expect(uppercaseTargetWord("white yellow red", 2)).to.equal(
        "white yellow RED"
      );
    });
    it("should return undefined if the target exceeds the length of the string. (NOTE that this will pass if you haven't solved the problem yet)", () => {
      expect(uppercaseTargetWord("lunch dinner", 5)).to.equal(undefined);
    });
    it("should use split", () => {
      expect(uppercaseTargetWord.toString()).includes(".split(");
    });
  });

  describe("createGraduateObject()", () => {
    it("should return an object that represents a graduate", () => {
      const graduateObject = createGraduateObject(
        "Eddie Willard",
        2020,
        ["JavaScript", "React", "CSS"],
        "https://github.com/example/profile",
        "https://linkedin.com/profile"
      );
      expect(graduateObject).to.deep.equal({
        name: "Eddie Willard",
        graduationYear: 2020,
        skills: ["JavaScript", "React", "CSS"],
        links: {
          github: "https://github.com/example/profile",
          linkedIn: "https://linkedin.com/profile",
        },
      });
    });
  });
});
