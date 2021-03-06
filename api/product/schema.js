const Joi = require('../../lib/joi');

const ValidatorSchemaOfBody = Joi.object({
    _id: Joi.objectId(),
    productName: Joi.string().required(),
    productDescription: Joi.string().required()  ,
    productPrice: Joi.number().positive().required(),
    productSize: Joi.string().required(),
    productCategorie: Joi.string().required(),
    productAge: Joi.number().positive(),
    productGender: Joi.string().required(),
    productBrand: Joi.string().required(),
    image_url: Joi.string().required(),
    type_livraison: Joi.string(),
    url: Joi.string().required(),

});


module.exports = {
    ValidatorSchemaOfBody,
};