const Joi = require("../../lib/joi");

const ValidatorSchemaOfBody = Joi.object({
  _id: Joi.objectId(),
  productName: Joi.string().required(),
  productDescription: Joi.default("test"),
  productPrice: Joi.number().positive().required(),
  productSize: Joi.default("test"),
  productCategorie: Joi.default("test"),
  productAge: Joi.default("test"),
  productGender: Joi.default("test"),
  productBrand: Joi.string().required(),
  image_url: Joi.string().required(),
  type_livraison: Joi.string(),
  url: Joi.string().required(),
});

module.exports = {
  ValidatorSchemaOfBody,
};
