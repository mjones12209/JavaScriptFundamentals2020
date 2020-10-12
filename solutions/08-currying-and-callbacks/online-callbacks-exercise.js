/**
 * Source
 * @see https://www.hackerrank.com/contests/javascript-week2/challenges/js-callbacks
 */

function myFilter(my_array, callback) {
  //Enter your code here
  let newArray = [];
  for (let i = 0; i < my_array.length; i++) {
    if (callback(my_array[i])) newArray.push(my_array[i]);
  }
  return newArray;
}

console.log(
  myFilter([2, 3, 10, 11, 13], (num) => {
    return num % 2 === 0;
  })
); // [2, 10]

function processData(inputArray) {
  //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
  console.log(
    myFilter(inputArray, (num) => {
      return num % 2 === 0;
    })
  );
}

processData([2, 3, 10, 11, 13]); // [2, 10]
