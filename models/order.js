const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateReaction = require("../lib/date");

const order = mongoose.Schema({
  reference: String,
  total: Number,
  date_creation: Date,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});
const joiOrderSchema = Joi.object({
  _id: Joi.objectId(),
  reference: Joi.string().required(),
  total: Joi.number().positive().required(),
  date_creation: Joi.date().default(
    () => dateReaction.getDate(),
    "date of creation"
  ),
  user_id: Joi.objectId().required(),
  product_id: Joi.objectId().required(),
});

function collection() {
  return mongoose.model("orders", order);
}

function _validateSchema(order) {
  return Joi.attempt(order, joiOrderSchema);
}

async function findOrderbyId(id, product_id) {
  const order = await collection().findOne({
    user_id: id,
    product_id: product_id,
  });
  return order;
}

async function findItemsByUser(userId, orderType) {
  const orders = await collection().find(
    {
      user_id: userId,
      reference: orderType,
    },
    { _id: 0, product_id: 1 }
  );
  return orders;
}

async function findItemsByUserId(userId) {
  //const orders = await collection().find({ user_id: userId });
  const orders = await collection().aggregate([
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "products",
      },
    },
  ]);
  return orders;
}

async function findUsersByItem(productId) {
  const orders = await collection().find({
    product_id: productId,
  });
  return orders;
}

async function findUsersByItemOrder(productId, type) {
  const orders = await collection().find(
    {
      product_id: productId,
      reference: type,
    },
    { _id: 0, user_id: 1 }
  );
  return orders;
}

async function insertOne(order) {
  const order_validate = _validateSchema(order);
  if (order_validate) {
    const order_returned = await collection().insertMany(order_validate);
    return order_returned;
  }
  return null;
}

async function deleteOrder(user_id, product_id) {
  const order = await collection().findOne({
    user_id: user_id,
    product_id: product_id,
  });
  console.log("Order to delete");
  console.log(order);
  if (order) {
    await collection().deleteOne({ _id: order._id });
    return true;
  }
  return false;
}

module.exports = {
  insertOne,
  deleteOrder,
  findOrderbyId,
  findItemsByUser,
  findItemsByUserId,
  findUsersByItem,
  findUsersByItemOrder,
};
