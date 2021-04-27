const Joi = require("../../lib/joi");

const ValidatorSchemaOfBody = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email({ minDomainAtoms: 2 }).required(),
  password: Joi.string().min(8).required(),
  date_creation: Joi.date().default(
    () => dateReaction.getDate(),
    "date of creation"
  ),
  date_naissance: Joi.date(),
  image_url: Joi.string().required(),
  numero_tel: Joi.number().positive().required(),
  alergie: Joi.string().allow(""),
  fav_color: Joi.string().allow(""),
  height: Joi.string().allow(""),
  weight: Joi.string().allow(""),
  gender: Joi.string().required(),
  role: Joi.string().required(),
});

module.exports = {
  ValidatorSchemaOfBody,
};
