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
  let nString = String(n);
  let res = nString.substring(1);
  console.log(nString);
  console.log(res);
  for (let i = 1; i < nString.length; i++) {
      if (nString.slice(0, i) + nString.slice(i + 1) > res) res = nString.slice(0, i) + nString.slice(i + 1);
  }
  return +res;
}

module.exports = {
  deleteDigit
};
