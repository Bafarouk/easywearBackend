const {ObjectId}  = require('mongoose').Types;

/**
 * Object used with `Joi.extend` to enable ObjectID input and parsing for schema validation.
 * https://github.com/hapijs/joi/blob/v10.0.3/API.md#extendextension
 */
module.exports = {
  name: 'objectId',
  language: {
    pre: 'must be a valid ObjectID',
  },
  /**
   * Function run by joi during the validation process.
   *
   * @param   {String|ObjectID} value : the ObjectID field. Can be a string representing an ObjectID
   *                                  or directly an ObjectID.
   * @param   {Object} state : object containing the current context of validation.
   * @param   {Object} options : options given to Joi.
   * @returns {ObjectID|ValidationError} The casted ObjectID or a ValidationError if invalid.
   */
  pre(value, state, options) {
    try {
      return new ObjectId(value);
    } catch (err) {
      return this.createError('objectId.pre', { v: value }, state, options);
    }
  },
};
