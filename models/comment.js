const mongoose = require('mongoose');
const Joi = require('../lib/joi');
const dateComment = require('../lib/date');
const { ObjectId } = require('mongoose').Types;

const commentSchema = mongoose.Schema({
    description: String,
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

const joiCommentSchema = Joi.object({
    _id: Joi.objectId(),
    description: Joi.string().required(),
    date_creation: Joi.date().default( () => dateComment.getDate(), 'date of creation'),
    post_id: Joi.objectId().required(),
    user_id: Joi.objectId().required()
});

function _validateSchema(comment1){
    return Joi.attempt(comment1,joiCommentSchema);
}

function collection (){
    return mongoose.model('Comment', commentSchema);
}




module.exports= {
  
};