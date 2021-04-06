const Joi = require("../../lib/joi");
const datePost = require("../../lib/date");

const ValidatorSchemaOfBody = Joi.object({
  _id: Joi.objectId(),
  description: Joi.string().required(),
  date_creation: Joi.date().default(
    () => datePost.getDate(),
    "date of creation"
  ),
  post_id: Joi.objectId().required(),
  user_id: Joi.objectId().required(),
});

module.exports = {
  ValidatorSchemaOfBody,
};
