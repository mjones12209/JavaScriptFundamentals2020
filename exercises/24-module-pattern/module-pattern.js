/**
 * As a teacher, I would like to be able to be see which of my students are passing or failing,
 * so I can have a better understanding on how my students are preforming.
 *
 * Complete the Teacher Gradebook by using the module pattern. Use the studentGrades data that I have imported for you.
 *
 * 1) Create third method is used to debug and will return a list of all the students.Useful for debugging purposes
 * @example
 * TeachersGradeBook.debug(); // returns all students
 *
 * 2) Create a method TeacherGradeBook.getFailingStudents() which returns an array of objects of all the students that have failing the course.
 * @example
 * TeacherGradeBook.getFailingStudents();
 * // [ {firstName:'Billy',lastName:'Joel',grades:[20,30,40,50]}, {firstName:'Luke',lastName:'Skywalker', grades:[0,0,0,100]} ]
 *
 * 3) Create a method TeachersGradeBook.getPassingStudents(), which will return an array of objects of all the students that have passed.
 * @example
 * TeachersGradeBook.getPassingStudents();
 * // [ {firstName:'jane',lastName:'doe',grades:[100,100,100,100]}, {firstName:'James',lastName:'Bond', grades:[90,90,90,90]} ]
 */

// const { studentGrades } = require("./students");

const students = [
  {
    firstName: "Jane",
    lastName: "Doe",
    grades: [50, 60, 70, 20, 10, 20]
  },
  {
    firstName: "John",
    lastName: "Doe",
    grades: [100, 100, 100, 100, 100, 90]
  },
  {
    firstName: "Michael",
    lastName: "Jackson",
    grades: [50, 40, 20, 20, 30, 20]
  },
  {
    firstName: "Bill",
    lastName: "Clinton",
    grades: [70, 60, 70, 80, 100, 70]
  },
  {
    firstName: "Joe",
    lastName: "Miller",
    grades: [70, 60, 70, 80, 100, 70]
  },
  {
    firstName: "Billy",
    lastName: "Jean",
    grades: [70, 90, 90, 80, 100, 80]
  }
];


const TeacherGradeBook = (() => {
  const debug = () => {
    students.forEach(student=>console.log(`${student.firstName} ${student.lastName}`));
  }

  const getFailingStudents = () => {
    let arr = [];
    students.forEach((student)=>{ 
      if(student.grades.reduce((acc,curr)=>acc + curr) / student.grades.length < 65){arr.push(student)}
     });
     return arr;    
  }

  const getPassingStudents = () => {
    let arr = [];
    students.forEach((student)=>{ 
      if(student.grades.reduce((acc,curr)=>acc + curr) / student.grades.length > 65){arr.push(student)}
     });
     return arr;    
  }

  return {
    debug,
    getFailingStudents,
    getPassingStudents
  };
})();



module.exports = {
  TeacherGradeBook,
};
