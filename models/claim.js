const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateClaim = require("../lib/date");
const { ObjectId } = require("mongoose").Types;

const claimSchema = mongoose.Schema({
  type: String,
  description: String,
  date_claim: Date,
  image_url: String,
  state: Number,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const joiClaimSchema = Joi.object({
  _id: Joi.objectId(),
  type: Joi.string().required(),
  description: Joi.string().required(),
  date_claim: Joi.date().default(() => dateClaim.getDate(), "date of creation"),
  image_url: Joi.string().required(),
  state: Joi.number().positive().required(),
  user_id: Joi.objectId().required(),
});

function _validateSchema(claim1) {
  return Joi.attempt(claim1, joiClaimSchema);
}

const joiClaimSchemaupdateUser = Joi.object({
  description: Joi.string().required(),

  state: Joi.number().required(),
});

function _validateSchemaUpdateUser(claim1) {
  return Joi.attempt(claim1, joiClaimSchemaupdateUser);
}

const joiClaimSchemaupdateAdmin = Joi.object({
  state: Joi.number().positive().required(),
});

function _validateSchemaUpdateAdmin(claim1) {
  return Joi.attempt(claim1, joiClaimSchemaupdateAdmin);
}

function collection() {
  return mongoose.model("Claim", claimSchema);
}

async function insertOne(claim) {
  try {
    const claim_validate = _validateSchema(claim);
    if (claim_validate) {
      const claim_returned = await collection().insertMany(claim_validate);
      return claim_returned;
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
}
async function deleteone(id) {
  try {
    const claim_returned = await collection().findByIdAndDelete(id);
    return claim_returned;
  } catch (error) {
    console.log(error.message);
  }
}
async function updateUser(id, claim) {
  try {
    const claim_validate = _validateSchemaUpdateUser(claim);
    if (claim_validate) {
      const claimToUpdate = await collection().findById(id);
      if (!claimToUpdate) {
        console.log("Post wasnt found");
        return null;
      }
      claimToUpdate.description = claim.description;

      claimToUpdate.state = claim.state;
      claimToUpdate.save();
      return claimToUpdate;
    }
    return null;
  } catch (error) {
    console.log("Error", error.message);
  }
}
async function validateClaim(id, claim) {
  try {
    const claim_validate = _validateSchemaUpdateAdmin(claim);
    if (claim_validate) {
      const claimToUpdate = await collection().findById(id);
      if (!claimToUpdate) {
        return null;
      }

      claimToUpdate.state = claim.state;
      claimToUpdate.save();
      return claimToUpdate;
    }
    return null;
  } catch (error) {
    console.log("Error", error.message);
  }
}
async function findOne(id) {
  try {
    const claim_returned = await collection().findById(id);
    return claim_returned;
  } catch (error) {
    console.log(error.message);
  }
}
async function findAll() {
  try {
    const claim_returned = await collection().find();
    return claim_returned;
  } catch (error) {
    console.log(error.message);
  }
}

async function findAllByType(type) {
  try {
    const claim_returned = await collection().find({ type: type });
    return claim_returned;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  insertOne,
  deleteone,
  updateUser,
  validateClaim,
  findOne,
  findAll,
  findAllByType,
};
