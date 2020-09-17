function myName() {
  // Create a variable called myName
  let myName = "Mike"
  return myName;
}
console.log(myName("Mike"))

function setTeachersNames(teachersName) {
  // change code below this line so that we can set the variable.
  let teachers = null;
  teachers = teachersName; //  <- this is invalid because teachers is a const. How can we fix this?

  return teachers;
}
console.log("Chris")

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum = a + b;

  return sum;
}
console.log(add(5,6))

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  return age+=1;
}
console.log(ageMeByAYear(33))

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  return age-=1;
}
console.log(makeMeYoungerByAYear(33))

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  let int = Number(str);
  return int;
}
console.log(convertStringToInt("6"))

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  let characterPosition = name.indexOf(letter);
  return characterPosition;
}
console.log(getTheCharacterPosition("Mike","e"))

/** Take the argument and return the length of the argument */

function stringLength(str) {
  let strLength = str.length;

  return strLength;
}
console.log(stringLength("String"))

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  let lastCharacter = str.charAt(str.length-1);
  return lastCharacter;
}
console.log(getLastCharacter("Awesome"))

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  let newPlace = place.slice(place.indexOf(' ') - place.length);

  return newPlace;
}
console.log(getLastWordInPlaceName("San Diego"))

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber = arg1 > arg2 ? arg1 : arg2;
  return largestNumber;
}
console.log(getLargerNumber(5,7))

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
  let newFullName;
  let firstName = fullName.substring(0,fullName.indexOf(' '));
  newFullName = firstName + ' ' + newLastName;
  return newFullName;
}
console.log(replaceLastName("Mike Jones","Cobb"))
/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(fullName) {
  let capitalizeLastName;
  firstLetterLastName = fullName.charAt(fullName.indexOf(' ')+1);
  firstName = fullName.substring(0, fullName.indexOf(' '));
  lastName = fullName.slice(fullName.indexOf(' ') - fullName.length)
  lastName = lastName.replace(firstLetterLastName,firstLetterLastName.toUpperCase())
  capitalizeLastName = firstName + lastName
  return capitalizeLastName;
}
console.log(capitalizeLastName("Michael jones"))

/**
 * Ignore me. This is for the tests
 */

module.exports = {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  replaceLastName,
  capitalizeLastName,
};
