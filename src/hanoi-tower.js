const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber < 0) return false;
  if (disksNumber === 1) return 1;
  let trns = 1;
  for (let i = 1, k = 2; i < disksNumber; i++) {
      trns += k;
      k = k * 2;
  }
  return Object({ turns: trns, seconds: Math.floor(trns / (turnsSpeed / 3600)) });
}

module.exports = {
  calculateHanoi
};
