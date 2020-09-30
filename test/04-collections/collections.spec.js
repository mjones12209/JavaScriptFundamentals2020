const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  addToAnArray,
  accessingAnItem,
  highestNumber,
  isPalindrome,
  createDogObject,
  updateStudentObject,
  returnObjectValues,
  combineArray,
  accessAnItemObject,
  combineObject,
  removeDuplicates,
  findAndAbort,
  createArrayOfFunctions,
} = require("../../exercises/04-collections/collections");
// } = require("../../solutions/04-collections/collections-solutions");

describe("exercises/04-collections/collections.js", () => {
  describe("accessingAnItem()", () => {
    it('should return "BMW"', () => {
      const car = accessingAnItem();
      expect(car).to.equal("BMW");
    });
  });

  describe("addToAnArray()", () => {
    it("should return an array with four items", () => {
      const newArr = addToAnArray();
      expect(newArr.length).to.equal(4);
    });
  });

  describe("combineArray()", () => {
    it("should merge two arrays into one", () => {
      const combinedArray = combineArray(["HTML"], ["CSS"]);
      expect(combinedArray).to.be.equalTo(["HTML", "CSS"]);
    });
  });

  describe("createArrayOfFunctions()", () => {
    it("should return an array with two functions", () => {
      const array = createArrayOfFunctions();
      expect(array).to.be.an("array");
      expect(array[0]).to.be.a("function");
      expect(array[1]).to.be.a("function");
    });

    it("the first function should add two arguments", () => {
      const sum = createArrayOfFunctions()[0](10, 10);
      expect(sum).to.equal(20);
    });

    it("the second function should subtract two arguments", () => {
      const difference = createArrayOfFunctions()[1](50, 50);
      expect(difference).to.equal(0);
    });
  });

  describe("highestNumber()", () => {
    it("should return the highest number in the array", () => {
      const number1 = highestNumber([1, 10, 2, 3, 4]);
      expect(number1).to.equal(10);
      const number2 = highestNumber([-1, -5, -4]);
      expect(number2).to.equal(-1);
    });
  });

  describe("findAndAbort()", () => {
    it("should return the object with a given id", () => {
      const people = [
        {
          id: 10,
          firstName: "John",
          lastName: "Smith",
        },
        {
          id: 20,
          firstName: "Cookie",
          lastName: "Monster",
        },
        {
          id: 30,
          firstName: "Jane",
          lastName: "Doe",
        },
        {
          id: 40,
          firstName: "Tom",
          lastName: "Hardy",
        },
      ];

      expect(findAndAbort(people, 20)).to.deep.equal({
        id: 20,
        firstName: "Cookie",
        lastName: "Monster",
      });
    });

    it("should use break to break out of a loop", () => {
      expect(findAndAbort.toString().includes("break")).to.equal(true);
    });
  });

  describe("isPalindrome()", () => {
    it("should return true if a word is a palidrome", () => {
      const result = isPalindrome("eye");
      expect(result).to.be.equal(true);
    });
    it("should return true false if a word is not a palidrome", () => {
      const result = isPalindrome("not a palindrome");
      expect(result).to.be.equal(false);
    });
    it("should use split", () => {
      expect(isPalindrome.toString().includes("split")).to.equal(true);
    });
  });

  describe("removeDuplicates()", () => {
    it("should remove all duplicate values", () => {
      const unique = removeDuplicates([
        2,
        3,
        4,
        4,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7,
        5,
        32,
        3,
        4,
        5,
      ]);
      expect(unique).to.be.equalTo([2, 3, 4, 5, 6, 7, 32]);
    });
  });

  describe("createDogObject()", () => {
    it('should return an object with the properties "name", "legs", "tails", "owners"', () => {
      const dog = createDogObject();
      expect(dog).to.be.an("object");
      expect(dog).to.have.all.keys("name", "legs", "tails", "owners");
    });
    it('the "owners" property should be an array', () => {
      const dog = createDogObject();
      expect(dog.owners).to.be.an("array");
    });
  });

  describe("accessAnItemObject()", () => {
    it("should return ballcap", () => {
      const item = accessAnItemObject();
      expect(item).to.equal("ballcap");
    });
  });

  describe("updateStudentObject()", () => {
    it("should complete the student object with a first name, last name, and an array of three skills", () => {
      const student = updateStudentObject();
      expect(student.firstName).to.be.a("string").to.be.ok;
      expect(student.lastName).to.be.a("string").to.be.ok;
      expect(student.skills.length).to.equal(3);
    });
  });

  describe("returnObjectValues()", () => {
    it("should return all the values in an object", () => {
      const objectValues = returnObjectValues();
      expect(objectValues).to.be.equalTo([1, 4, "Stacy", "Rocket"]);
    });
  });

  describe("combineObject()", () => {
    it("should combine two objects and return a single object", () => {
      const obj1 = {
        firstName: "Clark",
      };
      const obj2 = {
        lastName: "Kent",
      };
      const combinedObj = combineObject(obj1, obj2);
      expect(combinedObj).to.deep.equal({
        firstName: "Clark",
        lastName: "Kent",
      });
    });
  });
});
