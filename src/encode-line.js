const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';

  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i - 1]) count++;
    else {
      if (i !== 0) {
        result += count + str[i - 1];
      }
      count = 1;
    }
  }
  result += count + str[str.length - 1];

  return result.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
