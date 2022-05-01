const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = '';
  let additionString = '';
  if (options.addition === false || options.addition === null || options.addition && typeof additionString !== 'undefined') {
    additionString = options.addition;
  }
  for (let i=0; i < (options.repeatTimes ?? 1); i++) {
    let substr = '';
    substr += str;
    for (let k = 0; k < (options.additionRepeatTimes ?? 1); k++) {
      if (!(k === (options.additionRepeatTimes ?? 1) - 1)) {
        substr += additionString + (options.additionSeparator ?? '|');
      } else {
        substr += additionString;
      }
    }
    substr += (options.separator ?? '+');
    result += substr;
  }
  return result.substring(0,result.length - (options.separator?.length ?? 1));
}

module.exports = {
  repeater
};
