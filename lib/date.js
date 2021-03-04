/**
 * Get current date
 * Using a function to get a new Date allows us to stub it in our test,
 * thus being able to assert events / creation dates / etc. easily.
 *
 * @returns {Date} new current date
 */
function getDate() {
    return new Date();
  }
  
  module.exports = { getDate };