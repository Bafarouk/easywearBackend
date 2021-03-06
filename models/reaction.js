const mongoose = require('mongoose');
//const Joi = require('../lib/joi');
//const dateReaction = require('../lib/date');
//const { ObjectId } = require('mongoose').Types;

const reaction = mongoose.Schema({
    type: String,
    date_creation: Date,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
        },
    post_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
    
});
module.exports = mongoose.model("reaction", reaction);
/*
const joiReactionSchema = Joi.object({
    _id: Joi.objectId(),
    type: Joi.string().required(),
    date_creation: Joi.date().default( () => dateReaction.getDate(), 'date of creation'),
    post_id: Joi.objectId().required(),
    user_id: Joi.objectId().required()
});

function _validateSchema(reaction1){
    return Joi.attempt(reaction1,joiReactionSchema);
}

function collection (){
    return mongoose.model('Reaction', reactionSchema);
}



*/
module.exports= {
  
};