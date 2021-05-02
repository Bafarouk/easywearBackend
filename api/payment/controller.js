const paypal = require("paypal-rest-sdk");
const order = require("../../models/order");
const dateReaction = require("../../lib/date");

module.exports = {
  pay,
  success,
  cancel,
};

async function pay(req, res) {
  console.log("pay method called ");
  console.log(req.body);
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:3100/api/payment/success",
      cancel_url: "http://localhost:3100/api/payment/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Balance",
              sku: "001",
              price: 15,
              currency: "USD",
              quantity: 1,
              /* user_id: 55 */
            },
          ],
        },
        amount: {
          currency: "USD",
          total: 15,
        },
        description: "This item when purchased will add $5.00 to your balance",
        custom: 1,
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          //res.redirect(payment.links[i].href);
          tempTotal = 15;
          product_id = req.body.product_id;
          res.json({
            forwardLink:
              payment.links[i].href +
              "&total=" +
              tempTotal +
              "&product=" +
              product_id,
          });
        }
      }
    }
  });
}

async function success(req, res) {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const prodid = product_id;
  console.log("success method");
  console.log(req.body);
  console.log("req query");
  console.log(tempTotal);
  console.log("product id###");
  console.log(product_id);
  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: tempTotal,
        },
      },
    ],
  };

  /*    let user=userService.getById(1).subscribe();
    console.log("#######"+user)
    let bal=user.balance;
        user.balance=20+bal; */

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log("after adding balance");
        console.log(payment.transactions[0].amount.total);
        const userId = payment.transactions[0].custom;
        const total = Number(payment.transactions[0].amount.total);
        userService.updateBalance(userId, total);
        /* let historyy;
        historyy.transactionType="credit";
        historyy.amount=1500;
        historyy.id_user=1;
        historyy.date='12-12-2020';
        historyService.create(historyy); */
        const orderInfo = {
          reference: paymentId,
          total: total,
          user_id: userId,
          product_id: prodid,
          date_creation: dateReaction.getDate(),
        };
        order.insertOne(orderInfo).then((data) => {
          console.log(data);
          res.redirect("http://localhost:3000/user/profile");
        });
        //console.log(JSON.stringify(payment));
      }
    }
  );
}

async function cancel(req, res) {
  res.send("Cancelled");
}
