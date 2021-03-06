const galleries = require('../../models/gallerie');
const schemaEvent = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');

function _validateschemaEvent(body){
    return Joi.attempt(body,schemaEvent);

}


async function addGallerie(req,res){
    const  gallerie = await galleries.insertOne(req.body);
    if(gallerie){
        return res.status(200).send(gallerie);
    }
    return res.status(400).end();
}