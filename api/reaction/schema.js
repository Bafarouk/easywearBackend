const Joi = require('../../lib/joi');

const ValidatorSchemaOfBody = Joi.object({
    _id: Joi.objectId(),
    type: Joi.string().required(),
    date_creation: Joi.date().default( () => dateReaction.getDate(), 'date of creation'),
    post_id: Joi.objectId().required(),
    user_id: Joi.objectId().required()
});


module.exports = {
    ValidatorSchemaOfBody,
};