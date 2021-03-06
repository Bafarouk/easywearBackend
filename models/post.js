const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const datePost = require("../lib/date");
const { ObjectId } = require("mongoose").Types;

const postSchema = mongoose.Schema({
  description: String,
  date_creation: Date,
  image_url: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

const joiPostSchema = Joi.object({
  _id: Joi.objectId(),
  description: Joi.string().required(),
  date_creation: Joi.date().default(
    () => datePost.getDate(),
    "date of creation"
  ),
  image_url: Joi.string().required(),
  user_id: Joi.objectId().required(),
  event_id: Joi.objectId().required(),
});

const joiPostSchemaForUpdate = Joi.object({
  description: Joi.string().required(),
  image_url: Joi.string().required(),
});

function _validateSchema(post1) {
  return Joi.attempt(post1, joiPostSchema);
}

function _validateSchemaForUpdate(post2) {
  return Joi.attempt(post2, joiPostSchemaForUpdate);
}

function collection() {
  return mongoose.model("Post", postSchema);
}

const insertOne = async (post) => {
  const post_validate = _validateSchema(post);
  if (post_validate) {
    const post_returned = await collection().insertMany(post_validate);
    return post_returned;
  }
  return null;
};

const findAll = async () => {
  try {
    const posts = await collection().find({}).sort("description");
    return posts;
  } catch (error) {
    console.log("Error", error.message);
  }
};

const findPostbyId = async (id) => {
  try {
    const post = await collection().findById(id);
    return post;
  } catch (error) {
    console.log("Error", error.message);
  }
};

const updatePost = async (id, post) => {
  try {
    const post_validate = _validateSchemaForUpdate(post);
    if (post_validate) {
      const postToUpdate = await collection().findById(id);
      if (!postToUpdate) {
        console.log("Post wasnt found");
        return null;
      }
      postToUpdate.description = post.description;
      postToUpdate.image_url = post.image_url;
      postToUpdate.save();
      return postToUpdate;
    }
    return null;
  } catch (error) {
    console.log("Error", error.message);
  }
};

const deletePost = async (id) => {
  try {
    const post = await collection().findByIdAndRemove(id);
    if (post) {
      return post;
    }
    return null;
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = {
  insertOne,
  findAll,
  findPostbyId,
  updatePost,
  deletePost,
};
