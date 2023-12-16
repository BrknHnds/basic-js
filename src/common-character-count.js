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
function getCommonCharacterCount(s1, s2) {
  // кошмар конечно, но лаконичное решение не домал до конца. оставил решение "в лоб"
  const s1Arr = s1.split('').sort();
  const s2Arr = s2.split('').sort();
  const s1SetArr = [...new Set(s1Arr)];
  const s2SetArr = [...new Set(s2Arr)];
  let commonCharArr =  []; 
  s1SetArr.forEach(e => {
      if (s2SetArr.includes(e)) commonCharArr.push(e);
  })
  s1ArrCountArr = [];
  s2ArrCountArr = [];
  commonCharArr.forEach(e1 => {
      s1ArrCountArr.push(s1Arr.filter(e2 => e2 === e1).length);
      s2ArrCountArr.push(s2Arr.filter(e2 => e2 === e1).length);
  })
  return s1ArrCountArr.reduce((acc, e, i) => {
      if (e < s2ArrCountArr[i]) return acc + e;
      return acc + s2ArrCountArr[i];
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
