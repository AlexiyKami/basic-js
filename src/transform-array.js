const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let resultArr = [];
  arr.forEach((elem, index) => {
    switch (elem) {
      case '--double-next':
        if(index !== arr.length - 1 && typeof arr[index + 1] !== 'string') {
          resultArr.push(arr[index + 1]);
        }
        break;
      case '--double-prev':
        if(index !== 0 && typeof arr[index - 1] !== 'string') {
          resultArr.push(arr[index - 1]);
        }
        break;
      case '--discard-next':
        arr.splice(index + 1, 1);
        break;
        case '--discard-prev':
        resultArr.splice(index - 1, 1);
        break;
      default:
        if (elem !== '--discard-prev' && elem !== '--double-next' && elem !== '--double-prev' && elem !== '--discard-next') {
          resultArr.push(elem);
        }
        break;
    }
  })
  return resultArr;
}


module.exports = {
  transform
};
