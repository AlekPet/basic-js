const { NotImplementedError } = require("../extensions/index.js");

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
  let nums = Array.from(n.toString());
  let max = +nums[0];
  for (let i = 0; i < nums.length; i++) {
    let copy = [...nums];
    copy.splice(i, 1);
    const value = +copy.join("");
    if (value > max) max = value;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
