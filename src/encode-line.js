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
  // не учёл порядок :(
  // strArr = str.split('');
  // let strArrSet = Array.from(new Set([...strArr]))
  // let lettCount = strArrSet.map(e1 => String(strArr.filter(e2 => e2 === e1).length));
  // return lettCount.map((e, i) => e > 1 ? e + strArrSet[i] : strArrSet[i]).join('');
  strArr = str.split('');
  let result = [];
  for (let i = 0, k = 1; i < strArr.length; i++) {
      if (strArr[i] === strArr[i + 1]) {
          k++;
      } else if (strArr[i] !== strArr[i + 1]) {
          if (k > 1) {
              result.push(String(k) + strArr[i]);
              k = 1;
          } else if (k === 1) {
              result.push(strArr[i]);
          }
      }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
