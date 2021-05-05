const mongoose = require('mongoose');
const Joi = require('../lib/joi');
const dateEvent = require('../lib/date');
const { ObjectId } = require('mongoose').Types;
const user = require('./user');

const eventSchema = mongoose.Schema({
    eventName: String,
    date_debut: Date,
    date_fin: Date,
    description: String,
    image_url: String, 
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
    
});

const joiEventSchema = Joi.object({
    _id: Joi.objectId(),
    eventName: Joi.string().required(),
    description: Joi.string().required(),
    date_debut: Joi.date(),
    date_fin: Joi.date(),
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
   // const event_validate = _validateSchema(event);
   // if(event_validate){
        const event_returned = await collection().insertMany(event);
        return event_returned ;
    //}
   // return null;
}

async function deleteOneByEventName(id){
    
        await collection().findByIdAndDelete(id);
        return true;
    
}


async function find(query = {}, projections = {}) {
    return await collection().find(query, projections);
}


async function findOneById(eventId, projections = {}) {
    return await collection().findOne({ _id: eventId }, projections);
}


async function findOneByEventName(event_name, projections = {}) {
    return await collection().findOne({ eventName: event_name }, projections);
}

async function findRecentEvents(){
    return await collection().find({}).sort({date_debut: -1});
}


async function findRecentEventsFin(){
    return await collection().find({}).sort({date_fin: -1});
}

async function updateOne(id, updatedFields) {
    const result = await collection().updateOne(
        { _id: id },
        { $set: updatedFields },
    );
    return result;
}



module.exports= {
    insertOne,
    find,
    findOneByEventName,
    findOneById,
    updateOne,
    deleteOneByEventName,
    findRecentEvents,
    findRecentEventsFin
};