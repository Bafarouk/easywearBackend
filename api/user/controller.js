const users = require("../../models/user");
const schemaUser = require("./schema").ValidatorSchemaOfBody;
const Joi = require("../../lib/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
process.env.SECRET_KEY = "secret";

function _validateschemaUser(body) {
  return Joi.attempt(body, schemaUser);
}

async function addUser(req, res) {
  userr = req.body;
  let user1 = await users.findUserbyEmail(req.body.email);
  if (user1) {
    console.log(user1);
    console.log(req.body.email + " user exists please choose another one !");
    res.json({ error: "user exists" });
  } else {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      userr.password = hash;

      users
        .insertOne(userr)
        .then((data) => {
          userr._id = data[0]._id;
          console.log(userr);
          console.log(data);

          let token = jwt.sign(userr, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        })
        .catch((err) => {
          res.send("error: " + err);
        });
    });
  }
}

async function login(req, res) {
  let user1 = await users.findUserbyEmail(req.body.email);
  if (!user1) {
    console.log(user1);
    console.log(req.body.email + " User does not exist");
    res.json({ error: "Wrong email" });
  } else {
    if (bcrypt.compareSync(req.body.password, user1.password)) {
      const payload = {
        _id: user1._id,
        first_name: user1.first_name,
        last_name: user1.last_name,
        email: user1.email,
        image_url: user1.image_url,
        numero_tel: user1.numero_tel,
        alergie: user1.alergie,
        fav_color: user1.fav_color,
        height: user1.height,
        weight: user1.weight,
        gender: user1.gender,
        date_naissance: user1.date_naissance,
        role: user1.role,
      };
      let token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: 1440,
      });
      res.send(token);
    } else {
      res.json({ error: "Wrong password" });
    }
  }
}

async function profile(req, res) {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  let user = await users.findUserbyEmail(decoded.email);
  if (user) {
    res.json(user);
  } else {
    res.json({ error: "User does not exist" });
  }
}

async function getUserById(req, res) {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  let user = await users.findUserbyId(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.json({ error: "User does not exist" });
  }
}

async function deleteUser(req, res) {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  console.log("delete");
  let user = await users.findUserbyEmail(req.body.email);
  if (user) {
    if (decoded.role === "admin") {
      users.deleteUser(decoded.email);
      res.send("user deleted successfully");
    } else {
      res.send("user not deleted you need admin privilege");
    }
  } else {
    res.send("User does not exist");
  }
}

async function updateUser(req, res) {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  let user = await users.findUserbyEmail(req.body.email);
  if (user) {
    if (decoded.role === "admin" || user._id == decoded._id) {
      console.log("update");
      console.log(user);
      let user1 = await users.updateUser(user._id, req.body);
      console.log(user1);
      res.json(user1);
    } else {
      res.send("user not deleted you need admin privilege");
    }
  } else {
    res.send("User does not exist");
  }
}

async function getAllUsers(req, res) {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  console.log("getAll");
  if (decoded.role === "admin") {
    let listUsers = await users.findAllUser();
    if (listUsers) {
      res.json(listUsers);
    } else {
      res.send("list empty");
    }
  } else {
    res.send("user not deleted you need admin privilege");
  }
}

module.exports = {
  addUser,
  login,
  profile,
  deleteUser,
  updateUser,
  getAllUsers,
  getUserById,
};
