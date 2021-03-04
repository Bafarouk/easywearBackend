
const events = require('../../models/event');
const schemaEvent = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');

function _validateschemaEvent(body){
    return Joi.attempt(body,schemaEvent);

}


async function addEvent(req,res){
    const  event = await events.insertOne(req.body);
    if(event){
        return res.status(200).send(event);
    }
    return res.status(400).end();
}


module.exports = {
    addEvent
}; 