const contact = require("../../models/contact");

const Joi = require("../../lib/joi");
var nodemailer = require("nodemailer");

function _validateschemaEvent(body) {
  return Joi.attempt(body, schemaEvent);
}

async function addContact(req, res) {
  const event = await contact.insertOne(req.body);
  if (event) {
    return res.status(200).send(event);
  }
  return res.status(400).end();
}

async function deleteContact(req, res) {
  const contacts = await contact.deleteone(req.params.id);
  console.log(req.params.id);
  if (contacts) {
    return res.status(200).send(contacts);
  }
  return res.status(400).end();
}
async function getAllContacts(req, res) {
  const contacts = await contact.findAll();
  if (contacts) {
    return res.status(200).send(contacts);
  }
  return res.status(404).send();
}

async function getcontactById(req, res) {
  const event = await contact.findOneById(req.query.eventId);
  if (event) {
    return res.status(200).send(event);
  }
  return res.status(404).send();
}
async function sendMail(req, res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rana.chaabane@esprit.tn",
      pass: "****",
    },
  });

  var mailOptions = {
    from: "rana.chaabane@esprit.tn",
    to: req.body.Email,
    subject: req.body.Subject,
    html: req.body.Text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      console.log(req.body.Subject);
    }
  });
}

module.exports = {
  addContact,
  deleteContact,
  getAllContacts,
  getcontactById,
  sendMail,
};
