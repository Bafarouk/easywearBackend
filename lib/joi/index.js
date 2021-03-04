const Joi = require('joi');
const objectIdExtend = require('./ObjectId.joi');

const joiExtends = [objectIdExtend];

module.exports = Joi.extend(joiExtends);
