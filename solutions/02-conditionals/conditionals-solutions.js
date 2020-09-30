/***
 * Change below so that it will also compare data types
 *
 *
 */
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 * ```javascript
 * testStrictNotEqual(17, 17) // should return "Equal"
 * testStrictNotEqual("17", 17) // should return "Not Equal"
 * testStrictNotEqual(12, "bob") // should return "Not Equal"
 * ```
 *
 */

function testStrictNotEqual(a, b) {
  // Only Change Code Below this Line
  if (a !== b) {
    // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

/***
 *  Refactor the code down below to use the logical && operator.
 *  This should return "Yes" when it is 6, 7, 8 and 9.
 *  ```javascript
 *  testLogicalAnd(9); // should return "Yes"
 *  testLogicalAnd(6); // should return "Yes"
 *  testLogicalAnd(10); // should return "No"
 *  testLogicalAnd(5); // should return "No"
 *  ```
 *  You must use the && operator to complete the problem.
 */

function testLogicalAnd(num) {
  // Method 1: if statement
  if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";

  // Method 2: Ternary operator
  return num > 5 && num < 10 ? "Yes" : "No";
}

/**
 * Refactor the code down below to use the logical || operator
 * ```javascript
 * testLogicalOr(0) // should return No
 * testLogicalOr(20) // should return Yes
 * testLogicalOr(25) // should return Yes
 * ````
 */

function testLogicalOr(num) {
  if (num === 20 || num === 25) {
    return "Yes";
  }
  return "No";
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  return isEven % 2 === 0;
}

/****
 *  You are given a variable num:
 *  Your task is to print:
- ONE, if num is equal to  1.
- TWO, if num is equal to  2.
- THREE,if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num is equal to 5.
- SIX,  if num is equal to 6.
- SEVEN,if num is equal to 7.
- EIGHT,if num is equal to 8.
- NINE, if num is equal to 9.
 * 
 * PLEASE TRY AGAIN, if  is none of the above
 * 
 *  *****/

function caseInSwitch(num) {
  switch (num) {
    case 1:
      return "ONE";
    case 2:
      return "TWO";
    case 3:
      return "THREE";
    case 4:
      return "FOUR";
    case 5:
      return "FIVE";
    case 6:
      return "SIX";
    case 7:
      return "SEVEN";
    case 8:
      return "EIGHT";
    case 9:
      return "NINE";
    default:
      return "PLEASE TRY AGAIN";
  }
}

module.exports = {
  isEvenOrOdd,
  compareEquality,
  testStrictNotEqual,
  testLogicalAnd,
  testLogicalOr,
  caseInSwitch,
};
