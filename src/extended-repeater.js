const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(
  str,
  {
    separator = "+",
    additionSeparator = "|",
    repeatTimes = 0,
    addition = "",
    additionRepeatTimes = 0,
  }
) {
  function funcRepeat(text, count, sep) {
    let resultText = "";
    let x = 0;
    while (x < count) {
      resultText += x === count - 1 ? text : `${text}${sep}`;
      x++;
    }
    return resultText;
  }

  str = new String(str).valueOf();
  addition = new String(addition).valueOf();

  let additionText = "";
  if (additionRepeatTimes && additionRepeatTimes !== 0) {
    additionText = funcRepeat(addition, additionRepeatTimes, additionSeparator);
  } else if (addition) {
    additionText = addition;
  }

  let result = str;
  if (repeatTimes && repeatTimes !== 0) {
    result = funcRepeat(str + additionText, repeatTimes, separator);
  } else {
    result = result + additionText;
  }

  return result;
}

module.exports = {
  repeater,
};
