const Joi = require("../../lib/joi");

const ValidatorSchemaOfBody = Joi.object({

    _id: Joi.objectId(),
    productName: Joi.string().required(),
    productDescription: Joi.string()  ,
    productPrice: Joi.string().required(),
    productSize: Joi.string(),
    productCategorie: Joi.string(),
    productAge: Joi.number().positive(),
    productGender: Joi.string(),
    productBrand: Joi.string().required(),
    image_url: Joi.string().required(),
    type_livraison: Joi.string(),
    url: Joi.string().required(),

});

module.exports = {
  ValidatorSchemaOfBody,
};
