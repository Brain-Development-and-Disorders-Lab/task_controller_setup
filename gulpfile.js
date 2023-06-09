const del = require("del");

/**
 * Clean up build artefacts
 * @param {function} cb callback function
 */
const clean = (cb) => {
  // Extend this array with additional directories or files for removal
  del(["dist"]);
  cb();
}

exports.clean = clean;
