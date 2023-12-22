const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj_names = new Map();
  names.forEach((f) => {
    if (!obj_names.has(f)) {
      obj_names.set(f, { count: 0, name: f });
    } else {
      const get_name = obj_names.get(f);
      if (get_name.name === f) {
        get_name.count++;
        const newName = `${f}(${get_name.count})`;
        obj_names.set(newName, { count: get_name.count, name: f });
      } else {
        const newName = `${f}(${get_name.count})`;
        get_name.count++;
        obj_names.set(newName, { count: 0, name: newName });
      }
    }
  });

  return Array.from(obj_names.keys());
}

module.exports = {
  renameFiles,
};
