const paypal = require("paypal-rest-sdk");
const orders = require("../../models/order");
const dateReaction = require("../../lib/date");
const jwt = require("jsonwebtoken");

async function getOrdersByUserId(req, res) {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  let order = await orders.findItemsByUserId(decoded._id);
  if (order) {
    res.json(order);
  } else {
    res.json({ error: "Order does not exist" });
  }
}
async function cancel(req, res) {
  res.redirect("http://localhost:3000/order/profile");
}
module.exports = {
  getOrdersByUserId,
  cancel,
};
