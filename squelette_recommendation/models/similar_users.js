const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateReaction = require("../lib/date");
const Rate = require("./rate"); // import the rate of the entity concerned
const _ = require("underscore"); // library that contains all the math methods we will need

const similar = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  similar: [
    // a list of users that have rated the same items of this user
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      similarity: String, // this value is between 0 and 1  and represents similarty between the two users
    },
  ],
});

function collection() {
  return mongoose.model("similar", similar);
}
// this method will return a list of users similar to this user
async function findSimilarbyUserId(id) {
  const similar = await collection().findOne({ user_id: id });
  return similar;
}
// this method will insert a list of similar users
async function insertOne(similar) {
  const similar_returned = await collection().insertMany(similar);
  return similar_returned;
}
// this method will delete a user's list of similar...
async function deleteSimilar(id) {
  const similar = await collection().find({ user_id: id });
  if (similar) {
    await collection().deleteOne({ user_id: id });
    return true;
  }
  return false;
}
// this is most important method it will update the list of similar users
async function updateSimilar(user_id) {
  let uLikes = await Rate.findItemsByUser(user_id, "like");
  console.log("#### userLikes ####");
  console.log(_.pluck(uLikes, "product_id"));
  let userLikes = _.pluck(uLikes, "product_id");
  for (let i = 0; i < userLikes.length; i++) {
    userLikes[i] = userLikes[i].toString();
  }
  console.log(userLikes);
  let uDislikes = await Rate.findItemsByUser(user_id, "dislike");
  console.log("#### userDislikes ####");
  console.log(uDislikes);
  let userDislikes = _.pluck(uDislikes, "product_id");
  for (let i = 0; i < userDislikes.length; i++) {
    userDislikes[i] = userDislikes[i].toString();
  }
  console.log(userDislikes);
  const items = _.flatten([userLikes, userDislikes]);
  const others = [];
  console.log("#### items ####");
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    let users = await Rate.findUsersByItem(items[i]);
    for (let i = 0; i < users.length; i++) {
      others.push(users[i].user_id.toString());
    }
  }
  //console.log(others);
  console.log("####");
  // console.log(typeof Array.from(others));
  let newOthers = _.without(_.unique(_.flatten(others)), user_id.toString());
  console.log("##### new Others ####");
  console.log(newOthers);
  let similar = [];
  for (let i = 0; i < newOthers.length; i++) {
    let oLikes = await Rate.findItemsByUser(newOthers[i], "like");
    let otherLikes = _.pluck(oLikes, "product_id");
    for (let i = 0; i < otherLikes.length; i++) {
      otherLikes[i] = otherLikes[i].toString();
    }
    console.log("#### other Likes ####");
    console.log(otherLikes);
    let oDislikes = await Rate.findItemsByUser(newOthers[i], "dislike");
    let otherDislikes = _.pluck(oDislikes, "product_id");
    for (let i = 0; i < otherDislikes.length; i++) {
      otherDislikes[i] = otherDislikes[i].toString();
    }
    similar.push({
      user_id: newOthers[i],
      // this jaccard method will calculate the similarity index
      similarity:
        (_.intersection(userLikes, otherLikes).length +
          _.intersection(userDislikes, otherDislikes).length -
          _.intersection(userLikes, otherDislikes).length -
          _.intersection(userDislikes, otherLikes).length) /
        _.union(userLikes, otherLikes, userDislikes, otherDislikes).length,
    });
  }

  const sim = await findSimilarbyUserId(user_id);
  if (sim) {
    // if the user have already a list of similar users it will be deleted and replaced with the newly generated list
    console.log("exists");
    await deleteSimilar(user_id);
    const sim = await insertOne({ user_id: user_id, similar: similar });
    return sim;
  } else {
    // else it will simply insert the list
    const sim = await insertOne({ user_id: user_id, similar: similar });

    return sim;
  }
}

module.exports = {
  insertOne,
  deleteSimilar,
  findSimilarbyUserId,
  updateSimilar,
};
