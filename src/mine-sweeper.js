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
  let numMatrix = Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    numMatrix[i] = Array(matrix[i].length).fill(0);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] === true) {
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (numMatrix[i + x] !== undefined && numMatrix[i + x][k + y] !== undefined) {
              numMatrix[i + x][k + y]++;
            }
          }
        }
        numMatrix[i][k]--;
      }
    }
  }
  return numMatrix;
}

module.exports = {
  minesweeper
};
