/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {array} arr
 * @returns {number}
 *
 * @example findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
 * @example findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
 */
function findLongestWordLength(str) {
  const strSplit = str.split(' ');
  let arrWordsLengths = [];
  for(let word of strSplit){
    arrWordsLengths.push(word.length);
  }
  return Math.max(...arrWordsLengths)
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

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
function fearNotLetter(str) {
  const alphabetLetters = "abcdefghijklmnopqrstuvwxyz";
  for (i=0;i<str.length;i++){
    if(!(str[i] == alphabetLetters[i])){
      return alphabetLetters[i];
    }
  }
}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghjklmno"))

module.exports = {
  findLongestWordLength,
  fearNotLetter,
};
