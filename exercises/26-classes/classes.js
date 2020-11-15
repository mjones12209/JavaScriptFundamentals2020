/**
 * As a teacher, I would like to be able to be see which of my students are passing or failing,
 * so I can have a better understanding on how my students are preforming.
 *
 * Create a class called "TeacherGradeBook".
 * The class should accept an array of students and set it as a property "students". This array of students will look like:
 * @see exercises/24-module-pattern/students.js
 *
 * @example
 * const students = [ {firstName:'Jane',lastName:'Doe',grades:[100,100,100,100]}, ... ];
 * const gradebook = new TeachersGradeBook(students);
 * console.log(gradebook.students);
 * // [ {firstName:'Jane',lastName:'Doe',grades:[100,100,100,100]}, ... ]
 *
 * This class should have two methods:
 *
 * 1) "getPassingStudents", which will return an array of objects of all the students that have passed.
 * @example
 * const students = [ {firstName:'Jane',lastName:'Doe',grades:[100,100,100,100]}, ... ];
 * const gradebook = new TeachersGradeBook(students);
 * console.log( gradebook.getPassingStudents() );
 * // [ {firstName:'Jane',lastName:'Doe',grades:[100,100,100,100]}, {firstName:'James',lastName:'Bond', grades:[90,90,90,90]} ]
 *
 * 2) "getFailingStudents" which returns an array of objects of all the students that have failed the course.
 * @example
 * const students = [ {firstName:'Jane',lastName:'Doe',grades:[100,100,100,100]}, ... ];
 * const gradebook = new TeachersGradeBook(students);
 * console.log( gradebook.getFailingStudents() );
 * // [ {firstName:'Billy',lastName:'Joel',grades:[20,30,40,50]}, {firstName:'Luke',lastName:'Skywalker', grades:[0,0,0,100]} ]
 */

/**
 * Ignore everything below this line. This is for the tests.
 */
let myExports = {
  TeacherGradeBook: undefined,
};
try {
  //eslint-disable-next-line no-undef
  if (TeacherGradeBook) myExports.TeacherGradeBook = TeacherGradeBook;
  // eslint-disable-next-line no-undef
} catch (e) {}

module.exports = myExports;
