const Joi = require('../../lib/joi');

const ValidatorSchemaOfBody = Joi.object({
    eventName: Joi.string().required(),
    eventCode: Joi.number().positive().required()
});


module.exports = {
    ValidatorSchemaOfBody,
};