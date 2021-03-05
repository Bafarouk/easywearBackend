
const users = require('../../models/user');
const schemaUser = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');

function _validateschemaUser(body){
    return Joi.attempt(body,schemaUser);

}


async function addUser(req,res){
    const  user = await users.insertOne(req.body);
    if(user){
        return res.status(200).send(user);
    }
    return res.status(400).end();
}


module.exports = {
    addUser
}; 