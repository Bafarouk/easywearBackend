
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
    return res.status(404).end();
}

async function deleteEvent(req,res){
    let id = req.params.id;
    const event = await events.deleteOneByEventName(id);
    if(event){
        return res.status(200).send();
    }
    return res.status(404).send();
}

async function getAllEvents(req,res){
    const event = await events.find();
    if(event){
        return res.status(200).send(event);
    }
    return res.status(404).send();
}

async function getEventById(req,res){
    const event = await events.findOneById(req.params.id);
    if(event){
        return res.status(200).send(event);
    }
    return res.status(404).send();
}

async function getEventByEventName(req,res){
    const event = await events.findOneByEventName(req.query.event_name);
    if(event){
        return res.status(200).send(event);
    }
    return res.status(404).send();
}

async function updateEvent(req,res){
    let id = req.params.id;
    const event = await events.updateOne(id, req.body);
    if(event){
        return res.status(200).send(event);
    }
    return res.status(404).send();
}

async function getRecentEvents(req,res){
    const recent_events = await events.findRecentEvents();
    if (recent_events){
        return res.status(200).send(recent_events);
    }
    return res.status(404).send();
}


async function getRecentEventsFin(req,res){
    const recent_events = await events.findRecentEventsFin();
    if (recent_events){
        return res.status(200).send(recent_events);
    }
    return res.status(404).send();
}



module.exports = {
    addEvent,
    deleteEvent,
    getAllEvents,
    getEventById,
    getEventByEventName,
    updateEvent,
    getRecentEvents,
    getRecentEventsFin
}; 