const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateReaction = require("../lib/date");

const rate = mongoose.Schema({
  rate_type: String,
  date_creation: Date,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // put the entity concerned that will be rated
  },
});
const joiRateSchema = Joi.object({
  _id: Joi.objectId(),
  rate_type: Joi.string().required(),
  date_creation: Joi.date().default(
    () => dateReaction.getDate(),
    "date of creation"
  ),
  user_id: Joi.objectId().required(),
  product_id: Joi.objectId().required(),
});

function collection() {
  return mongoose.model("rates", rate);
}

function _validateSchema(rate) {
  return Joi.attempt(rate, joiRateSchema);
}

async function findRatebyId(id) {
  const rate = await collection().findOne({ _id: id });
  return rate;
}
// this method will return a list of all the items disliked or liked (via rateType parameter) by this user
async function findItemsByUser(userId, rateType) {
  const rates = await collection().find(
    {
      user_id: userId,
      rate_type: rateType,
    },
    { _id: 0, product_id: 1 }
  );
  return rates;
}
// this method will return a list of all the items rated by this user
async function findItemsByUserId(userId) {
  const rates = await collection().find(
    {
      user_id: userId,
    },
    { _id: 0, product_id: 1 }
  );
  return rates;
}
// this method will return a list of all the users that ratede this item
async function findUsersByItem(productId) {
  const rates = await collection().find({
    product_id: productId,
  });
  return rates;
}
// this method will return a list of all the users that liked or disliked (specified via the parameter type) this item
async function findUsersByItemRate(productId, type) {
  const rates = await collection().find(
    {
      product_id: productId,
      rate_type: type,
    },
    { _id: 0, user_id: 1 }
  );
  return rates;
}
// add a rating (like or dislike)
async function insertOne(rate) {
  const rate_validate = _validateSchema(rate);
  if (rate_validate) {
    const rate_returned = await collection().insertMany(rate_validate);
    return rate_returned;
  }
  return null;
}
// delete a rating (like or dislike)
async function deleteRate(id) {
  const rate = await collection().find({ _id: id });
  if (rate) {
    await collection().deleteOne({ _id: id });
    return true;
  }
  return false;
}

module.exports = {
  insertOne,
  deleteRate,
  findRatebyId,
  findItemsByUser,
  findItemsByUserId,
  findUsersByItem,
  findUsersByItemRate,
};
