const claims = require('../../models/claim');

const Joi = require('../../lib/joi');




async function addClaim(req,res){
    const  claim = await claims.insertOne(req.body);
    if(claim){
        return res.status(200).send(claim);
    }
    return res.status(400).end();
}


module.exports = {
    addClaim
}; 