const mongoose = require('mongoose');
const Joi = require('../lib/joi');
const dateClaim = require('../lib/date');
const { ObjectId } = require('mongoose').Types;

const claimSchema = mongoose.Schema({
    type: String,
    description: String,
    date_claim: Date,
    image_url: String,
    state: Number,
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
});

const joiClaimSchema = Joi.object({
    _id: Joi.objectId(),
    type: Joi.string().required(),
    description: Joi.string().required(),
    date_claim: Joi.date().default( () => dateClaim.getDate(), 'date of creation'),
    image_url: Joi.string().required(),
    state: Joi.number().positive().required(),
    user_id: Joi.objectId().required()
});

function _validateSchema(claim1){
    return Joi.attempt(claim1,joiClaimSchema);
}

function collection (){
    return mongoose.model('Claim', claimSchema);
}


module.exports= {

};