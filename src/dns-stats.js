const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let result = {};
  let map = new Map();
  for (let domain of domains) {
    let subArr = domain.split('.').reverse();
    let tail = '';
    for (let i=0; i< subArr.length;i++) {
      tail += '.'+subArr[i];
      if (!map.has(tail)) {
        map.set(tail,1);
      } else {
        map.set(tail,map.get(tail)+1);
      }
    }
  }
  for (let elem of map) {
    result[elem[0]] = elem[1];
  }
  return result;
}

module.exports = {
  getDNSStats
};
