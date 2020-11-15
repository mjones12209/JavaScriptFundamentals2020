const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const { TeacherGradeBook } = require("../../exercises/26-classes/classes.js");

const students = [
  {
    firstName: "Jane",
    lastName: "Doe",
    grades: [50, 60, 70, 20, 10, 20],
  },
  {
    firstName: "John",
    lastName: "Doe",
    grades: [100, 100, 100, 100, 100, 90],
  },
  {
    firstName: "Michael",
    lastName: "Jackson",
    grades: [50, 40, 20, 20, 30, 20],
  },
  {
    firstName: "Bill",
    lastName: "Clinton",
    grades: [70, 60, 70, 80, 100, 70],
  },
  {
    firstName: "Joe",
    lastName: "Miller",
    grades: [70, 60, 70, 80, 100, 70],
  },
  {
    firstName: "Billy",
    lastName: "Jean",
    grades: [70, 90, 90, 80, 100, 80],
  },
];

describe("exercises/26-classes/classes.js", () => {
  describe("TeacherGradeBook class", () => {
    it("should be a class", () => {
      const classStr = TeacherGradeBook.toString();
      expect(classStr).to.match(/^class/);
    });
  });
  describe("constructor()", () => {
    it('should set have the parameter "students" and set this parameter as a property called "students"', () => {
      const gradebook = new TeacherGradeBook(students);
      expect(gradebook.students).to.deep.equal(students);
    });
  });
  describe("getPassingStudents()", () => {
    it("should return a list of passing students", () => {
      const gradebook = new TeacherGradeBook(students);
      const failingStudents = gradebook.getPassingStudents();
      const newStudents = failingStudents.map((student) => student.firstName);
      expect(newStudents).to.be.equalTo(["John", "Bill", "Joe", "Billy"]);
    });
  });
  describe("getFailingStudents()", () => {
    it("should return a failing list of students", () => {
      const gradebook = new TeacherGradeBook(students);
      const failingStudents = gradebook.getFailingStudents();
      const newStudents = failingStudents.map((student) => student.firstName);
      expect(newStudents).to.be.equalTo(["Jane", "Michael"]);
    });
  });
});
