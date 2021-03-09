
const participants = require('../../models/participant');
const schemaParticipant = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');


function _validateschemaEvent(body){
    return Joi.attempt(body,schemaParticipant);
}


async function addParticipant(req,res){
    const  participant = await participants.insertOne(req.body);
    if(participant){
        return res.status(200).send(participant);
    }
    return res.status(404).end();
}


module.exports = {
    addParticipant
}