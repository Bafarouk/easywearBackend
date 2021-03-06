const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateReaction = require("../lib/date");
const { ObjectId } = require("mongoose").Types;
const { cloudinary } = require("./../utils/cloudinary");

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  date_creation: Date,
  date_naissance: Date,
  image_url: String,
  numero_tel: Number,
  isVerified: { type: Boolean, default: false },
  alergie: String,
  fav_color: String,
  height: String,
  weight: String,
  gender: String,
  role: String,
});

const joiUserSchema = Joi.object({
  _id: Joi.objectId(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email({ minDomainAtoms: 2 }).required(),
  password: Joi.string().min(8).required(),
  date_creation: Joi.date().default(
    () => dateReaction.getDate(),
    "date of creation"
  ),
  date_naissance: Joi.date(),
  image_url: Joi.string().required(),
  numero_tel: Joi.number().positive().required(),
  alergie: Joi.string().allow(""),
  fav_color: Joi.string().allow(""),
  height: Joi.string().allow(""),
  isVerified: Joi.boolean().required(),
  weight: Joi.string().allow(""),
  gender: Joi.string().required(),
  role: Joi.string().required(),
});

function _validateSchema(user1) {
  return Joi.attempt(user1, joiUserSchema);
}

function collection() {
  return mongoose.model("User", userSchema);
}

async function insertOne(user) {
  const uploadResponse = await cloudinary.uploader.upload(user.image_url);
  if (!uploadResponse) user.image_url = "https://picsum.photos/200";
  user.image_url = uploadResponse.url;
  if (user.role === "admin") {
    user.isVerified = true;
  } else {
    user.isVerified = false;
  }
  const user_validate = _validateSchema(user);
  if (user_validate) {
    const user_returned = await collection().insertMany(user_validate);
    return user_returned;
  }
  return null;
}

async function insertOneFromGoogle(user) {
  user.image_url = user.picture;
  user.isVerified = true;
  user.last_name = user.family_name;
  user.first_name = user.given_name;
  user.role = "user";
  user.date_creation = dateReaction.getDate();

  const user_returned = await collection().insertMany(user);
  return user_returned;
}

async function findUserbyEmail(email) {
  const user = await collection().findOne({ email: email });
  return user;
}

async function findUserbyId(id) {
  const user = await collection().findOne({ _id: id });
  return user;
}

async function deleteUser(id) {
  const user = await collection().find({ _id: id });
  if (user) {
    await collection().deleteOne({ id: user._id });
    return true;
  }
  return false;
}

async function updateUser(id, data) {
  console.log("########## update user ##########");
  if (data.hasOwnProperty("image_url")) {
    console.log("image prop exists");
    const uploadResponse = await cloudinary.uploader.upload(data.image_url);
    if (!uploadResponse) data.image_url = "https://picsum.photos/200";
    data.image_url = uploadResponse.url;
  }
  const result = await collection().updateOne({ _id: id }, { $set: data });
  return result;
}

async function findAllUser() {
  const users = await collection().find({});
  //console.log(users)
  return users;
}

async function findAllUserByRole() {
  const users = await collection().aggregate([
    { $group: { _id: "$role", nb_user: { $sum: 1 } } },
  ]);
  return users;
}

module.exports = {
  insertOne,
  findUserbyEmail,
  deleteUser,
  updateUser,
  findUserbyId,
  findAllUser,
  findAllUserByRole,
  insertOneFromGoogle,
};
