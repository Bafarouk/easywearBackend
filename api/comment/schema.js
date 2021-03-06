const Joi = require('../../lib/joi');
const ValidatorSchemaOfBody = Joi.object({
    _id: Joi.objectId(),
    description: Joi.string().required(),
    date_creation: Joi.date().default( () => dateComment.getDate(), 'date of creation'),
    post_id: Joi.objectId().required(),
    user_id: Joi.objectId().required()
});


module.exports = {
    ValidatorSchemaOfBody,
};

