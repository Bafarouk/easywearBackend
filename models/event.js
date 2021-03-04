const mongoose = require('mongoose');
const Joi = require('../lib/joi');
const dateEvent = require('../lib/date');
const { ObjectId } = require('mongoose').Types;
const user = require('./user');

const eventSchema = mongoose.Schema({
    eventName: String,
    date_debut: Date,
    date_fin: Date,
    image_url: String, 
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
    
});

const joiEventSchema = Joi.object({
    _id: Joi.objectId(),
    eventName: Joi.string().required(),
    date_debut: Joi.date().default( () => dateEvent.getDate(), 'date of creation'),
    date_fin: Joi.date().default( () => dateEvent.getDate(), 'date of creation'),
    image_url: Joi.string().required(),
    user_id: Joi.objectId().required()
});

function _validateSchema(event1){
    return Joi.attempt(event1,joiEventSchema);
}

function collection (){
    return mongoose.model('Event', eventSchema);
}

async function insertOne(event){
    const event_validate = _validateSchema(event);
    if(event_validate){
        const event_returned = await collection().insertMany(event_validate);
        return event_returned ;
    }
    return null;
}



module.exports= {
    insertOne
};