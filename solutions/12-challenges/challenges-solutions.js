/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {array} arr
 * @returns {number}
 *
 * @example findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
 * @example findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
 */
const findLongestWordLength = (str) => {
  // Solution 1
  const words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > longestWord.length) longestWord = word;
  }
  return longestWord.length;

  // Solution 2
  const words = str.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) longestWord = word;
  });
  return longestWord.length;
};

/**
 * Find the missing letter in the passed letter range and return it
 * @param {string} letters
 * @returns {string} returns the missing letter from the string
 * @example
 *   fearNotLetter("abce") should return "d".
 *   fearNotLetter("abcdefghjklmno") should return "i".
 *   fearNotLetter("stvwx") should return "u".
 *   fearNotLetter("bcdf") should return "e".
 *   fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 *
 */
const fearNotLetter = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const position = alphabet.indexOf(str[0]); // e.g. if "str" is "stvwx", 17, because that is the position of "s" in the alphabet
  const letters = alphabet.substring(position).split(""); // e.g. if "str" is "stvwx", ["s", "t", "u", "v", "w", "x", "y", "z"]
  let substr = "";
  for (let i = 0; i < letters.length; i++) {
    substr += letters[i];
    if (str.indexOf(substr) < 0) return letters[i];
  }
};

module.exports = {
  findLongestWordLength,
  fearNotLetter,
};
