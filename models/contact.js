const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateClaim = require("../lib/date");

const joi = require("../lib/joi");

const contactSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  Phone: Number,
  Email: String,
  date_contact: Date,
  description: String,
});

const joicontactSchema = Joi.object({
  _id: Joi.objectId(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  Phone: joi.number().required(),
  date_contact: Joi.date().default(
    () => dateClaim.getDate(),
    "date of creation"
  ),
  Email: Joi.string().required(),
  description: Joi.string().required(),
});

function _validateSchema(contact) {
  return Joi.attempt(contact, joicontactSchema);
}

function collection() {
  return mongoose.model("contact", contactSchema);
}

async function insertOne(contact) {
  try {
    const contact_validate = _validateSchema(contact);
    if (contact_validate) {
      const contact_validate1 = await collection().insertMany(contact_validate);
      return contact_validate1;
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
}
async function deleteone(id) {
  try {
    const contact_validate = await collection().findByIdAndDelete(id);
    console.log(id);
    return contact_validate;
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(id) {
  try {
    const contact_validate = await collection().findById(id);
    return contact_validate;
  } catch (error) {
    console.log(error.message);
  }
}
async function findAll() {
  try {
    const sort = { date_contact: 1 };

    const contact_validate = await collection().find().sort(sort);
    return contact_validate;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  insertOne,
  deleteone,

  findOne,
  findAll,
};
