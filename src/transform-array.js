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
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// function transform(arr) {
//   let tempArr = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (discardNext(arr[i])) {
//           i++;
//       }
//       if (discardPrev(arr[i])) {
//           tempArr.splice(i, 1);
//       }
//       if (doubleNext(arr[i])) {
//           tempArr.push(arr[i + 1]);
//       }
//       if (doubledPrev(arr[i])) {
//           tempArr.push(arr[i - 1]);
//       }
//       if (!(discardNext(arr[i]) || discardPrev(arr[i]) || doubleNext(arr[i]) || doubledPrev(arr[i]))) {
//           tempArr.push(arr[i]);
//       }
//   }
//   function discardNext(e) { return e === '--discard-next' };
//   function discardPrev(e) { return e === '--discard-prev' };
//   function doubleNext(e) { return e === '--double-next' };
//   function doubledPrev(e) { return e === '--discard-prev' };
//   return tempArr;
// }

module.exports = {
  transform
};
