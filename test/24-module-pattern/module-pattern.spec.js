const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  TeacherGradeBook,
} = require("../../exercises/24-module-pattern/module-pattern.js");

describe("exercises/24-module-pattern/module-pattern.js", () => {
  describe("TeacherGradeBook.getPassingStudents()", () => {
    it("should return a list of passing students", () => {
      const passingStudents = TeacherGradeBook.getPassingStudents();
      const students = passingStudents.map((student) => student.firstName);
      expect(students).to.be.equalTo(["John", "Bill", "Joe", "Billy"]);
    });
  });
  describe("TeacherGradeBook.getFailingStudents()", () => {
    it("should return a failing list of students", () => {
      const failingStudents = TeacherGradeBook.getFailingStudents();
      const students = failingStudents.map((student) => student.firstName);
      expect(students).to.be.equalTo(["Jane", "Michael"]);
    });
  });
});
