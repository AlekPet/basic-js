const { NotImplementedError } = require("../extensions/index.js");

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
  const arr = [];
  const chars = Array.from(str);

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    const lastItem = arr[arr.length - 1];

    if (!lastItem || lastItem.char !== currentChar) {
      arr.push({ char: currentChar, count: 1 });
    } else {
      lastItem.count += 1;
    }
  }

  return arr
    .map((value) => `${value.count === 1 ? "" : value.count}${value.char}`)
    .join("");
}

module.exports = {
  encodeLine,
};
