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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [...arr];

  result.forEach((element, i) => {
    if (element === '--double-next') result[i] = result[i + 1];

    if (element === '--double-prev') result[i] = result[i - 1];

    if (element === '--discard-next') {

      result[i] = undefined;
      result[i + 1] = undefined;

    }
    if (element === '--discard-prev') {

      result[i] = undefined;
      result[i - 1] = undefined;

    }
  });

  return result.filter((element) => element !== undefined);
}


module.exports = {
  transform
};
