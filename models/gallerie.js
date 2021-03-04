const mongoose = require('mongoose');
const Joi = require('../lib/joi');
const dateGallerie = require('../lib/date');
const { ObjectId } = require('mongoose').Types;

const gallerieSchema = mongoose.Schema({
    description: String,
    date_creation: Date,
    image_url: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        }
    
});

const joiGallerieSchema = Joi.object({
    _id: Joi.objectId(),
    description: Joi.string().required(),
    date_creation: Joi.date().default( () => dateGallerie.getDate(), 'date of creation'),
    image_url: Joi.string().required(),
    user_id: Joi.objectId().required()
});

function _validateSchema(gallerie1){
    return Joi.attempt(gallerie1,joiGallerieSchema);
}

function collection (){
    return mongoose.model('Gallerie', gallerieSchema);
}




module.exports= {
  
};