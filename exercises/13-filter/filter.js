/**
 * Build your own filter function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @param {array} arr
 * @param {function} callback
 * @returns {mixed} a array of values with the values with some of the values removed
 */

const filter = (arr, callback) => {
  let newArr = [];
  for(i=0;i<arr.length;i++){
    if(callback(arr[i],i,arr)) newArr.push(arr[i])
  }
  return newArr;
};



/**
 * Delete the matching user from an array of user objects
 * @param {array} arr array of objects, where each object represents a user
 * @param {number} id the user's id
 * @returns {object} the array of user objects, but the user object with the matching id is removed
 *
 * @example
 * const users = [{
 *  id: 1024,
 *  username: "smile134",
 *  email: "smile134@example.com"
 * },{
 *  id: 1025,
 *  username: "newyorkfarmer",
 *  email: "johndoe@example.com"
 * }]
 * findUser(users, 1025);
 * // [{ id: 1024, username:"smile134", email: "smile134@example.com" }]
 */

 const users = [{
     id: 1024,
     username: "smile134",
     email: "smile134@example.com"
    },{
     id: 1025,
     username: "newyorkfarmer",
     email: "johndoe@example.com"
    }]
    
   

const deleteUser = (arr, id) => {
  return arr.filter(element => element.id !== id);
};

console.log(deleteUser(users, 1025))

module.exports = {
  filter,
  deleteUser,
};
