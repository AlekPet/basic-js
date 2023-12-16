const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  try {
    if (date.valueOf()) {
      if (date instanceof Date === false) throw Error();
    }
  } catch (error) {
    throw Error("Invalid date!");
  }

  if (date.toString() === new Date().toString())
    return "Unable to determine the time of year!";

  const month = date.getMonth();
  //     const seasons = {
  //       "spring": [2, 3, 4],
  //       "summer": [5, 6, 7],
  //       "autumn": [8, 9, 10],
  //       "winter": [11, 0, 1]
  //     };

  return month > 1 && month < 5
    ? "spring"
    : month > 4 && month < 8
    ? "summer"
    : month > 7 && month < 11
    ? "autumn"
    : "winter";
}

module.exports = {
  getSeason,
};
