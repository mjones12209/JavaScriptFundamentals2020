/**
 * Create an array that returns various types of data.
 * The first item in the array should be a string.
 * The second item in the array should be a function.
 * The third item in the array should be another array.
 *
 * @example
 * const array = createAnArray();
 * console.log(array[0]) // "Hello there"
 * console.log(array[1]) // () => { return "do something" }
 * console.log(array[2]) // [1, 2, 3, 4]
 */

const createAnArray = () => {
  return [
    "Hello there",
    func = () => {
      return "do something"
    },
    [1,2,3,4]
  ];;
};
const array = createAnArray();
/**
 * Using "split", uppercase the target word in the string.
 * If the target exceeds the length of the string, return undefined.
 *
 * @param {string} str
 * @param {integer} target the nth word to uppercase
 *
 * @returns {String} with the nth word in uppercase
 *
 * @example
 * uppercaseTargetWord("first second third", 2) // "first SECOND third"
 * uppercaseTargetWord("Javascript is cool", 3) // "Javascript is COOL"
 * uppercaseTargetWord("Javascript is not cool", 5) // undefined
 */

const uppercaseTargetWord = (str, target) => {
  let result = str.split(' ');
  result[target] = result[target].toUpperCase();
 
  if(target <= result.length){
    return result.join(' ');    
  } else {
    return undefined;
  }
};

console.log(uppercaseTargetWord("hello i am mike", 3))

/**
 *  CreateGraduateObject function takes in several arguments and combines them together in one object.
 *
 * @param {string} name
 * @param {number} graduationYear
 * @param {array} skills
 * @param {string} githubLink
 * @param {string} linkedInLink
 *
 * @returns {Object} with the properties "name", "graduationYear", "skills" and "links".
 * "links" should be an object with the properties "github" and "linkedIn".
 *
 * @example
 * const graduateObject = createGraduateObject("Eddie Willard", 2020, [ "Javascript", "React", "CSS" ], "https://github.com/example/profile", "https://linkedin.com/profile");
 *
 * console.log(graduateObject); //
 * {
 *   name: "Eddie Willard",
 *   graduationYear: 2020,
 *   skills: ["JavaScript", "React", "CSS"],
 *   links: {
 *     github: "https://github.com/example/profile",
 *     linkedIn: "https://linkedin.com/profile"
 *   }
 * }
 */

const createGraduateObject = (
  name,
  graduationYear,
  skills,
  githubLink,
  linkedInLink

) => {
  return {
   name,
   graduationYear,
   skills,
   links: {
    github : githubLink,
    linkedIn : linkedInLink
   }

  }

};
console.log(createGraduateObject("Eddie Willard", 2020, [ "Javascript", "React", "CSS" ], "https://github.com/example/profile", "https://linkedin.com/profile"))

/**
 * Ignore me.
 */
module.exports = {
  createAnArray,
  uppercaseTargetWord,
  createGraduateObject,
};
