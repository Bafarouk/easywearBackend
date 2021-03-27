const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const datePost = require("../lib/date");
const { ObjectId } = require("mongoose").Types;
const { cloudinary } = require("./../utils/cloudinary");

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  date_creation: Date,
  image_url: String,
  cloudinaryImageId: String,
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
  title: Joi.string().required(),
  description: Joi.string().required(),
  date_creation: Joi.date().default(
    () => datePost.getDate(),
    "date of creation"
  ),
  image_url: Joi.string().required(),
  cloudinaryImageId: Joi.string(),
  user_id: Joi.objectId().required(),
  event_id: Joi.objectId().required(),
});

const joiPostSchemaForUpdate = Joi.object({
  title: Joi.string().required(),
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
  const uploadResponse = await cloudinary.uploader.upload(post.image_url);
  if (!uploadResponse) post.image_url = "https://picsum.photos/200";
  post.image_url = uploadResponse.url;
  post.cloudinaryImageId = uploadResponse.public_id;
  console.log(uploadResponse.public_id);
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

      //Upload Image to Cloudinary
      console.log(postToUpdate);
      await cloudinary.uploader.destroy(postToUpdate.cloudinaryImageId);
      const uploadResponse = await cloudinary.uploader.upload(post.image_url);
      //End Upload Image

      if (!uploadResponse) postToUpdate.image_url = "https://picsum.photos/200";

      if (!postToUpdate) {
        console.log("Post wasnt found");
        return null;
      }
      postToUpdate.title = post.title;
      postToUpdate.description = post.description;
      postToUpdate.image_url = uploadResponse.url;
      postToUpdate.cloudinaryImageId = uploadResponse.public_id;
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
    await cloudinary.uploader.destroy(post.cloudinaryImageId);
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
