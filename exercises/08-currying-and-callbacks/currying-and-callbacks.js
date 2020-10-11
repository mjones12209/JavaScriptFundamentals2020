/**
 * Write a function called "multiplier" which accepts two parameters.
 * If the function is passed both parameters, it should return the product of the two.
 * If the function is only passed one parameter, it should return a function which can later be passed another
 * parameter to return the product.
 * You will have to use closures and arguments to solve this.
 *
 * @example
 * multiplier(3,4); // 12
 * multiplier(3)(4); // 12
 * multiplier(3); // function(){}....
 *
 * @param {number} a
 * @param {number} b
 */
const multiplier = (a, b) => {};

/**
 * Create a function called "printer".
 * Given a student name, it should format and prints out the value in a visually appealing way
 * (e.g. with hyphens or asterisks before each value) with `console.log`
 * slide
 * @example
 *  - Jamal
 *  - Matina
 * @param {string} name instructor name
 */

/**
 * NOTE that the test will use the "printer" function that you completed in the problem above.
 * Loop through the array of strings.
 * For each name, calls upon the function "printer" to print out the name
 * @param {array}
 * @param {function} callback printer function
 *
 * @example
 * printNames(["Jamal", "Matina"], printer);
 * // - Jamal
 * // - Matina
 */
const printNames = (array, callback) => {};

/**
 * Ignore everything below this line. It is for the tests.
 */
const myExports = {
  multiplier,
  printer: undefined,
  printNames,
};
try {
  //eslint-disable-next-line no-undef
  if (printer) myExports.printer = printer;
  // eslint-disable-next-line no-undef
} catch (e) {}

module.exports = myExports;
