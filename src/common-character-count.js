const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1,s2) {
  let str = s1;
  for (let symbol of s2) {
    if (str.indexOf(symbol != -1)) {
      str = str.substring(0,str.indexOf(symbol)) + str.substring(str.indexOf(symbol) + 1);
    }
  }
  return s1.length - str.length;
}

module.exports = {
  getCommonCharacterCount
};
