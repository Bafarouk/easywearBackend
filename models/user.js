const mongoose = require('mongoose');
const Joi = require('../lib/joi');
const dateReaction = require('../lib/date');
const { ObjectId } = require('mongoose').Types;

const userSchema = mongoose.Schema({

    first_name: String,
    last_name: String,
    email: String,
    password: String,
    date_creation: Date,
    date_naissance: Date,
    image_url: String,
    numero_tel: Number,
    alergie : String,
    fav_color : String,
    height: String,
    weight: String,
    gender: String,
    role: String,

});

const joiUserSchema = Joi.object({
    _id: Joi.objectId(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email({minDomainAtoms: 2}).required(),
    password: Joi.string().min(8).required(),
    date_creation: Joi.date().default( () => dateReaction.getDate(), 'date of creation'),
    date_naissance: Joi.date(),
    image_url: Joi.string().required(),
    numero_tel: Joi.number().positive().required(),
    alergie: Joi.string().required(),
    fav_color: Joi.string().required(),
    height: Joi.string().required(),
    weight: Joi.string().required(),
    gender: Joi.string().required(),
    role: Joi.string().required(),
});

function _validateSchema(user1){
    return Joi.attempt(user1,joiUserSchema);
}

function collection (){
    return mongoose.model('User', userSchema);
}

async function insertOne(user){
    const user_validate = _validateSchema(user);
    if(user_validate){
        const user_returned = await collection().insertMany(user_validate);
        return user_returned ;
    }
    return null;
}


module.exports= {
    insertOne
};