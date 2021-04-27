const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateReaction = require("../lib/date");
const { ObjectId } = require("mongoose").Types;
const { cloudinary } = require("./../utils/cloudinary");

const tokenSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  token: { type: String, required: true },
  expireAt: { type: Date, default: Date.now, index: { expires: 86400000 } },
});

const joiTokenSchema = Joi.object({
  _id: Joi.objectId(),
  user_id: Joi.objectId().required(),
  token: Joi.string().required(),
  expireAt: Joi.date().default(() => dateReaction.getDate(), "expireAt"),
});

function _validateSchema(token1) {
  return Joi.attempt(token1, joiTokenSchema);
}

function collection() {
  return mongoose.model("Token", tokenSchema);
}

async function insertOne(token) {
  console.log("######## insert Token  ##############");
  console.log(token);
  const token_validate = _validateSchema(token);
  if (token_validate) {
    console.log("Token is valid##############");
    const token_returned = await collection().insertMany(token_validate);
    return token_returned;
  }
  return null;
}

async function findTokenbyToken(data) {
  const tok = await collection().findOne({ token: data });
  return tok;
}

async function findTokenbyUserId(id) {
  const token = await collection().findOne({ user_id: id });
  return token;
}

async function deleteToken(id) {
  const token = await collection().find({ _id: id });
  if (token) {
    await collection().deleteOne({ id: token._id });
    return true;
  }
  return false;
}

async function updateToken(id, data) {
  const result = await collection().updateOne({ _id: id }, { $set: data });
  return result;
}

async function findAllToken() {
  const tokens = await collection().find({});
  //console.log(tokens)
  return tokens;
}

module.exports = {
  insertOne,
  findTokenbyToken,
  deleteToken,
  updateToken,
  findTokenbyUserId,
  findAllToken,
};
