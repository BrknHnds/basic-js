const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    // return (str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition + options.separator)
    // .repeat(options.repeatTimes).slice(0, -options.separator.length);
    const {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|'
  } = options;
  const additionStr = (addition + additionSeparator)
      .repeat(additionRepeatTimes - 1) + addition;
  return (str + additionStr + separator).repeat(repeatTimes).slice(0, -separator.length);
}

module.exports = {
  repeater
};
