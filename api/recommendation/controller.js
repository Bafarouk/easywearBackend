const Rate = require("../../models/rate");
const Similar = require("../../models/similar");
const Suggestion = require("../../models/suggestion");

async function addRate(req, res) {
  const rate = {
    date_creation: Date.now(),
    rate_type: req.body.rate_type,
    user_id: req.body.user_id,
    product_id: req.body.product_id,
  };
  Rate.insertOne(rate)
    .then((rate) => {
      console.log(rate);

      res.send(rate);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
}

async function addSimilar(req, res) {
  const similar = {
    user_id: req.body.user_id,
    similar: req.body.similar,
  };
  Similar.insertOne(similar)
    .then((similar) => {
      console.log(similar);

      res.send(similar);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
}

async function addSuggestion(req, res) {
  const suggestion = {
    user_id: req.body.user_id,
    suggestion: req.body.suggestion,
  };
  Suggestion.insertOne(suggestion)
    .then((suggestion) => {
      console.log(suggestion);

      res.send(suggestion);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
}

async function deleteRate(req, res) {
  console.log("delete rate");
  console.log(req.params);

  const rate = await Rate.deleteRate(req.params.user_id, req.params.product_id);
  if (rate) {
    res.send(rate);
  } else {
    res.send("Rate Does not exist");
  }
}

async function getRateByUserId(req, res) {
  console.log(req.params);
  let rate = await Rate.findRatebyId(req.params.user_id, req.params.product_id);
  if (rate) {
    res.send(rate);
  } else {
    res.send({});
  }
}

async function deleteSimilar(req, res) {
  console.log("delete similar");
  let similar = await Similar.findSimilarbyUserId(req.params.id);
  if (similar) {
    Similar.deleteSimilar(req.params.id);
    res.send("similar deleted successfully");
  } else {
    res.send("Similar does not exist");
  }
}

async function deleteSuggestion(req, res) {
  console.log("delete Suggestion");
  let suggestion = await Suggestion.findSuggestionbyUserId(req.params.id);
  if (suggestion) {
    Suggestion.deleteSuggestion(req.params.id);
    res.send("Suggestion deleted successfully");
  } else {
    res.send("Suggestion does not exist");
  }
}

async function itemsByUser(req, res) {
  console.log("itemsByUser rate");
  let rate = await Rate.findItemsByUser(req.body.user_id, req.body.rate_type);
  if (rate) {
    res.send(rate);
  } else {
    res.send("Rate does not exist");
  }
}

async function usersByItem(req, res) {
  console.log("UserByItems rate");
  let rate = await Rate.findUsersByItem(req.body.product_id);
  if (rate) {
    res.send(rate);
  } else {
    res.send("Rate does not exist");
  }
}

async function updateSimilar(req, res) {
  console.log("update similar");
  let similar = await Similar.updateSimilar("6042bf3bc407b72534a79524");
  if (similar) {
    res.send(similar);
  } else {
    res.send("similar update does not exist");
  }
}

async function updateSuggestion(req, res) {
  console.log("update Suggestion");
  let suggestion = await Suggestion.updateSuggestion(
    "6042bf3bc407b72534a79524"
  );
  if (suggestion) {
    res.send(suggestion);
  } else {
    res.send("Suggestion update does not exist");
  }
}

async function getSuggestionByUserId(req, res) {
  console.log("get Suggestion by user id");
  let suggestion = await Suggestion.findSuggestionbyUserId(req.body.user_id);
  if (suggestion) {
    res.send(suggestion);
  } else {
    res.send("Suggestion does not exist");
  }
}

async function getSuggestionByUserIdparam(req, res) {
  console.log("get Suggestion by user id");
  let suggestion = await Suggestion.findSuggestionbyUserId(req.params.user_id);
  if (suggestion) {
    res.send(suggestion);
  } else {
    res.send("Suggestion does not exist");
  }
}

async function rateItem(req, res) {
  const rate = {
    date_creation: Date.now(),
    rate_type: req.body.rate_type,
    user_id: req.body.user_id,
    product_id: req.body.product_id,
  };
  Rate.insertOne(rate)
    .then(async (rate) => {
      // console.log("##################### Rate ########################");
      //console.log(rate);

      let similar = await Similar.updateSimilar(req.body.user_id);
      if (similar) {
        /* console.log(
          "########################## update Similar #######################"
        );*/
        //console.log(similar);
        let suggestion = await Suggestion.updateSuggestion(req.body.user_id);
        if (suggestion) {
          /* console.log(
            "############################# update Suggestion ############################"
          );*/
          console.log(suggestion);
          res.send(suggestion);
        } else {
          res.send("Suggestion update does not exist");
        }
      } else {
        res.send("similar update does not exist");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
}

module.exports = {
  addRate,
  getRateByUserId,
  addSimilar,
  addSuggestion,
  deleteRate,
  deleteSimilar,
  deleteSuggestion,
  itemsByUser,
  usersByItem,
  updateSimilar,
  updateSuggestion,
  getSuggestionByUserId,
  getSuggestionByUserIdparam,
  rateItem,
};
