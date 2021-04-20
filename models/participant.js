const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateParticipation = require("../lib/date");
const { ObjectId } = require("mongoose").Types;

const participantSchema = mongoose.Schema({
tion: String,
    date_creation: Date,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        },
    event_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    }

});

const joiParticipantSchema = Joi.object({
  _id: Joi.objectId(),
  description: Joi.string().required(),
  date_creation: Joi.date().default(
    () => dateParticipation.getDate(),
    "date of creation"
  ),
  user_id: Joi.objectId().required(),
  event_id: Joi.objectId().required(),
});

function _validateSchema(participant1) {
  return Joi.attempt(participant1, joiParticipantSchema);
}

function collection() {
  return mongoose.model("Participant", participantSchema);
}


async function insertOne(participant){
    // const event_validate = _validateSchema(event);
    // if(event_validate){
         const participant_returned = await collection().insertMany(participant);
         return participant_returned;
     //}
    // return null;
 }


async function deleteOne(event_name){

}




module.exports= {
  
};

