const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = n.toString();
  let values = [];
  for (let elem of str) {
    let string = str.substring(0,str.indexOf(elem)) + str.substring(str.indexOf(elem)+1);
    values.push(string);
  }
  return Math.max(...values);
}


module.exports = {
  deleteDigit
};
