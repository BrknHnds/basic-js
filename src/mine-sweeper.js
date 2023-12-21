const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let res = [];
  for (let y = 0; y < matrix.length; y++) {
      res.push([]);
      for (let x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x]) {
              res[y].push(1);
          } else res[y].push(0);
      }
  }
  for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
          minesCount(res, x, y);
      }
  }
  return res;

  function minesCount(mtrx, x, y) {
      if (matrix[y][x]) {
          mtrx[y][x]--;
          if (y > 0 && x > 0) mtrx[y - 1][x - 1]++;
          if (y > 0) mtrx[y - 1][x]++;
          if (y > 0 && x < mtrx[0].length - 1) mtrx[y - 1][x + 1]++;
          if (x > 0) mtrx[y][x - 1]++;
          if (x < mtrx[0].length - 1) mtrx[y][x + 1]++;
          if (y < mtrx.length - 1 && x > 0) mtrx[y + 1][x - 1]++;
          if (y < mtrx.length - 1) mtrx[y + 1][x]++;
          if (y < mtrx.length - 1 && x < mtrx[0].length - 1) mtrx[y + 1][x + 1]++;
      }
  }
}

module.exports = {
  minesweeper
};
