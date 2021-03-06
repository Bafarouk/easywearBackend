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


async function deleteGallerie(req,res){
    let gallerie_id = req.query.id;
    const gallerie = await galleries.deleteOneById(gallerie_id);
    if(gallerie){
        return res.status(200).send();
    }
    return res.status(404).send();
}

async function getAllGalleries(req,res){
    const gallerie = await galleries.find();
    if(gallerie){
        return res.status(200).send(gallerie);
    }
    return res.status(404).send();
}

async function getGallerieById(req,res){
    const gallerie = await galleries.findOneById(req.query.gallerieId);
    if(gallerie){
        return res.status(200).send(gallerie);
    }
    return res.status(404).send();
}

async function updateGallerie(req,res){
    let gallerie_id = req.query.gallerieId;
    const gallerie = await galleries.updateOne(gallerie_id, req.body);
    if(gallerie){
        return res.status(200).send(gallerie);
    }
    return res.status(404).send();
}



module.exports = {
    addGallerie,
    deleteGallerie,
    getAllGalleries,
    getGallerieById,
    updateGallerie
}; 