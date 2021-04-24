const mongoose = require("mongoose");
const Joi = require("../lib/joi");
const dateReaction = require("../lib/date");
const Rate = require("./rate");
const Similar = require("./similar");
const _ = require("underscore");

const suggestion = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  suggestion: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      weight: String,
    },
  ],
});

function collection() {
  return mongoose.model("suggestion", suggestion);
}

async function findSuggestionbyUserId(id) {
  const suggestion = await collection().findOne({ user_id: id });
  return suggestion;
}

async function insertOne(suggestion) {
  const suggestion_returned = await collection().insertMany(suggestion);
  return suggestion_returned;
}

async function deleteSuggestion(id) {
  const suggestion = await collection().find({ user_id: id });
  if (suggestion) {
    await collection().deleteOne({ user_id: id });
    return true;
  }
  return false;
}

async function updateSuggestion(user_id) {
  let uLikes = await Rate.findItemsByUser(user_id, "like");
  //console.log("#### userLikes ####");
  // console.log(_.pluck(uLikes, "product_id"));
  let likes = _.pluck(uLikes, "product_id");
  for (let i = 0; i < likes.length; i++) {
    likes[i] = likes[i].toString();
  }
  //console.log(likes);
  let uDislikes = await Rate.findItemsByUser(user_id, "dislike");
  //console.log("#### userDislikes ####");
  //console.log(uDislikes);
  let dislikes = _.pluck(uDislikes, "product_id");
  for (let i = 0; i < dislikes.length; i++) {
    dislikes[i] = dislikes[i].toString();
  }
  //console.log(dislikes);
  let oUsers = await Similar.findSimilarbyUserId(user_id);
  // console.log("#### Similar users ####");
  //console.log(oUsers.similar);
  let items = [];
  let others = _.pluck(oUsers.similar, "user_id");
  for (let i = 0; i < others.length; i++) {
    others[i] = others[i].toString();
    let rates = await Rate.findItemsByUserId(others[i]);
    if (rates) items.push(rates);
  }
  //console.log(others);

  //console.log("#### items ####");
  items = _.pluck(_.flatten(items, "product_id"), "product_id");
  for (let i = 0; i < items.length; i++) {
    items[i] = items[i].toString();
  }
  items = _.difference(
    _.unique(_.flatten(items)),
    _.flatten([likes, dislikes])
  );
  //console.log(items);
  let suggestion = [];
  for (let i = 0; i < items.length; i++) {
    //console.log("#### user " + i + " ####");
    let likers = await Rate.findUsersByItemRate(items[i], "like");
    let dislikers = await Rate.findUsersByItemRate(items[i], "dislike");
    //console.log("#### likers ####");
    //console.log(likers);
    // console.log("#### dislikers ####");
    //console.log(dislikers);
    let numerator = 0;
    tab = _.without(_.flatten([likers, dislikers]), user_id);
    for (let other of tab) {
      // console.log("for " + other);
      other = _.pluck(_.flatten(other), "user_id");
      // console.log("##################");
      //console.log(other);
      other = _.findWhere(oUsers.similar, other);
      // console.log(other);
      if (other) {
        numerator += other.similarity;
        // console.log(other.similarity);
      }
    }
    suggestion.push({
      product_id: items[i],
      weight: numerator / _.union(likers, dislikers).length,
    });
    /* console.log("tab");
    console.log(tab); */
  }

  const sugg = await findSuggestionbyUserId(user_id);
  if (sugg) {
    // console.log("exists");
    await deleteSuggestion(user_id);
    const sugg = await insertOne({ user_id: user_id, suggestion: suggestion });
    return sugg;
  } else {
    const sugg = await insertOne({ user_id: user_id, suggestion: suggestion });

    return sugg;
  }
}

module.exports = {
  insertOne,
  deleteSuggestion,
  findSuggestionbyUserId,
  updateSuggestion,
};
