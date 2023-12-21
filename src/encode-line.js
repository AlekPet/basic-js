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
function encodeLine(/* str */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  // const objects_char = {};
  // const chars = new Set(str.split("")).forEach(
  //   (char) => (objects_char[char] = str.split(char).length - 1)
  // );

  // let result = "";
  // for (let x in objects_char) {
  //   const value = objects_char[x];
  //   result += value === 1 ? "" + x : value + x;
  // }
  // return result;
}

module.exports = {
  encodeLine,
};
