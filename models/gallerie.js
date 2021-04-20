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


async function insertOne(gallerie){
         const galerie_returned = await collection().insertMany(gallerie);
         return galerie_returned;
 }

async function deleteOneById(id){
    const galerie_delete = await collection().find({_id:id});
    if(galerie_delete) {
        await collection().deleteOne({id: id._id});
        return true;
    }
    return false;
}

async function find(query = {}, projections = {}) {
    return await collection().find(query, projections);
}

async function findOneById(gallerieId, projections = {}) {
    return await collection().findOne({ _id: gallerieId }, projections);
}

async function updateOne(gallerieId, updatedFields) {
    const result = await collection().updateOne(
        { _id: gallerieId },
        { $set: updatedFields },
    );
    return result;
}



module.exports={
    insertOne,
    updateOne,
    find,
    findOneById,
    deleteOneById
};