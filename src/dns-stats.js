const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
  
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
  const result = {};

  for (const domain of domains) {
    const segments = domain
      .split('.')
      .reverse();

    let current = '';
    console.log(current)
    for (const segment of segments) {
      current += `.${segment}`;
      result[current] = (result[current])
        ? result[current] + 1
        : 1
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
