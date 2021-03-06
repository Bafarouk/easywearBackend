const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const { ObjectId } = require("mongoose").Types;
const mongoosePaginate = require("mongoose-paginate-v2");
const productSchema = mongoose.Schema({
  productName: String,
  productDescription: String,
  productPrice: String,
  productSize: String,
  productCategorie: String,
  productAge: Number,
  productGender: String,
  productBrand: String,
  image_url: String,
  type_livraison: String,
  url: String,
});
productSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("products", productSchema);
/*
const joiProductSchema = Joi.object({
    _id: Joi.objectId(),
    productName: Joi.string().required(),
    productDescription: Joi.string().required(),
    productPrice: Joi.number().positive().required(),
    productSize: Joi.string().required(),
    productCategorie: Joi.string().required(),
    productAge: Joi.number().positive().required(),
    productGender: Joi.string().required(),
    productBrand: Joi.string().required(),
    image_url: Joi.string().required(),
    type_livraison: Joi.string().required(),
    url: Joi.string().required(),

});

function _validateSchema(product1){
    return Joi.attempt(product1,joiProductSchema);
}

function collection (){
    return mongoose.model('Product', productSchema);
}




module.exports= {
};
*/
