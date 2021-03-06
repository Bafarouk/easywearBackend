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

async function deleteOneByEventName(event_name){
    const event_delete = await collection().find({eventName:event_name});
    if(event_delete) {
        await collection().deleteOne({id: event_name._id});
        return true;
    }
    return false;
}


async function find(query = {}, projections = {}) {
    return await collection().find(query, projections);
}


async function findOneById(eventId, projections = {}) {
    return await collection().findOne({ _id: eventId }, projections);
}


async function findOneByEventName(eventName, projections = {}) {
    return await collection().findOne({ eventName: eventName }, projections);
}

async function updateOne(event_name, updatedFields) {
    const result = await collection().updateOne(
        { eventName: event_name },
        { $set: updatedFields },
    );
    return result;
}





module.exports= {
    insertOne,
    find,
    findOne,
    findOneByEventName,
    findOneById,
    updateOne,
    deleteOneByEventName
};