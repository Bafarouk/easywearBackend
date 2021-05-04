const users = require("../../models/user");
const schemaUser = require("./schema").ValidatorSchemaOfBody;
const Joi = require("../../lib/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Token = require("../../models/token");
const crypto = require("crypto");

var nodemailer = require("nodemailer");
const querystring = require("querystring");
const axios = require("axios");
const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID ||
  "846806384630-gt5esirbb89neaf5grerprki5kklr6cn.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || "9evm0DPox6YfYiXVZvFSDFd4";
const SERVER_ROOT_URI = "https://secure-ocean-54413.herokuapp.com";
const UI_ROOT_URI = "https://secure-ocean-54413.herokuapp.com";
const JWT_SECRET = "shhhhh";
const COOKIE_NAME = "auth_token";

process.env.SECRET_KEY = "secret";

function _validateschemaUser(body) {
  return Joi.attempt(body, schemaUser);
}

async function addUser(req, res) {
  var userr = req.body;
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
          var tok = {
            user_id: userr._id,
            token: crypto.randomBytes(16).toString("hex"),
          };
          Token.insertOne(tok);
          /* let token = jwt.sign(userr, process.env.SECRET_KEY, {
            expiresIn: 1440,
          }); */

          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "pidevtest2020@gmail.com",
              pass: "jetestemonprojet2020",
            },
          });
          //+"http://" +req.headers.host +"/api/user/confirmation/" +userr.email + "/" + tok.token +
          /* 
          
              "Hello " +
              userr.first_name +
              " " +
              userr.last_name +
              ",\n\n" +
              "Please verify your account by clicking the link: \n "+"http://" +req.headers.host +"/api/user/confirmation/" +userr.email + "/" + tok.token +
              "\n\nThank You!\n"

          */
          var activationLink =
            "http://" +
            req.headers.host +
            "/api/user/confirmation/" +
            userr.email +
            "/" +
            tok.token;
          var mailOptions = {
            from: "pidevtest2020@gmail.com",
            to: userr.email,
            subject: "Account verification",
            html: `<div bgcolor="#f5f5f5" lang="en" dir="ltr" style="margin:0;padding:0;min-width:100%"><div class="adM">






            <table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#f5f5f5" width="100%" style="font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:1em;line-height:1.5;max-width:600px;padding:0 20px 0 20px">
                <tbody><tr>
    
                    <td style="padding:20px">
    
                        <table role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td width="70">
                                    <a href="https://courses.edx.org/?utm_medium=email&amp;utm_campaign=accountactivation&amp;utm_content=31901e37-c18a-40b0-b443-a7f9a4bcaea9&amp;utm_source=student" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://courses.edx.org/?utm_medium%3Demail%26utm_campaign%3Daccountactivation%26utm_content%3D31901e37-c18a-40b0-b443-a7f9a4bcaea9%26utm_source%3Dstudent&amp;source=gmail&amp;ust=1587656567992000&amp;usg=AFQjCNEgVnZgj0ixAa6bmQ0RYQUYr1H6OA"><img src="http://res.cloudinary.com/cloudinaryforupload/image/upload/v1619547091/ri8o8g7crodvnz5zay1c.png" width="70" height="50" alt="" class="CToWUd"></a>
                                </td>
                                <td align="right" style="text-align:right">
                                    <a href="https://secure-ocean-54413.herokuapp.com/auth/login" style="color:#005686" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://courses.edx.org/?utm_medium%3Demail%26utm_campaign%3Daccountactivation%26utm_content%3D31901e37-c18a-40b0-b443-a7f9a4bcaea9%26utm_source%3Dstudent&amp;source=gmail&amp;ust=1587656567992000&amp;usg=AFQjCNEgVnZgj0ixAa6bmQ0RYQUYr1H6OA">Login
                                    </a>
                                </td>
                            </tr>
                            </tbody></table>
    
                    </td>
                </tr>
    
                <tr>
    
                    <td bgcolor="#ffffff" style="padding:30px 20px">
    
                        <table width="100%" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
    
                            <tbody><tr>
                                <td>
                                    <h1>
                                    Account activation
    
                                    </h1>
                                    <p style="color:rgba(0,0,0,.75)">
    
                                    You are almost there! Use the link below to activate your account to access engaging and high quality service from <span> EasyWear </span>. Note that you will not be able to reconnect to your account until you activate it.
    
                                        <br>
                                    </p>
    
                                    Activate your account
    
    
    
                                    <p>
    
                                        <a href="${activationLink}" style="color:#ffffff;text-decoration:none;border-radius:4px;background-color:#005686;border-top:12px solid #005686;border-bottom:12px solid #005686;border-right:50px solid #005686;border-left:50px solid #005686;display:inline-block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://courses.edx.org/activate/d51673ea25ca43c5a43c5e5d17ea5e39?utm_medium%3Demail%26utm_campaign%3Daccountactivation%26utm_content%3D31901e37-c18a-40b0-b443-a7f9a4bcaea9%26utm_source%3Dstudent&amp;source=gmail&amp;ust=1590535521121000&amp;usg=AFQjCNEqH8_8KRWSIFDZVF-NL0xC3S1Tcg">
    
                                            <font color="#ffffff"><b>Activate your account</b></font>
                                        </a>
                                    </p>
    
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="color:rgba(0,0,0,.75)">
    
                                    We try with all our know-how and our extensive experience to satisfy you.
    
                                        <br>
                                    </p>
                                </td>
                            </tr>
                            <tr><td>
                                    <p style="color:rgba(0,0,0,.75)">
    
                                        <br>
                                    </p>
                                </td>
                            </tr><tr>
    
                            </tr>
                            <tr>
                                <td>
                                    <p style="color:rgba(0,0,0,.75)">
    
                                    This email was sent automatically by <a href ="https://secure-ocean-54413.herokuapp.com" target="_ blank" data-saferedirecturl="https://www.google.com/url?q=https://courses.edx.org&amp;source=gmail&amp;ust=1587656567992000&amp;usg=AFQjCNHHaf6ONTDQYaAc07EJolFLX0Wtcg"> <span class="il"> EasyWear </span> </a> because someone tried to create an account on EasyWear using this email address.
    
                                        <br>
                                    </p>
                                </td>
                            </tr>
                            </tbody></table>
    
                    </td>
                </tr>
    
                <tr>
    
                    <td style="padding:20px">
                        <table role="presentation" width="100%" align="left" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td style="padding-bottom:20px">
    
                                    <table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0" width="210">
                                        <tbody><tr>
    
    
    
    
    
                                        </tr>
                                        </tbody></table>
                                </td>
                            </tr>
                            <tr>
    
                                <td style="padding-bottom:20px">
    
    
                                </td>
                            </tr>
                            <tr>
    
                                <td style="padding-bottom:20px">
    
                                </td>
                            </tr>
                            <tr>
    
                                <td>
                                    © 2020 <span class="il">EasyWear</span>, All rights reserved.<br>
                                    <br>
                                    Our e-mail: pidevtest2020@gmail.com<br>
    
                                </td>
                            </tr>
    
                            </tbody></table>
                    </td>
                </tr>
                </tbody></table><div class="yj6qo"></div><div class="adL">
    
    
    
            </div></div>`,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
              console.log("");
              res.json(userr);
            }
          });
        })
        .catch((err) => {
          res.send("error: " + err);
        });
    });
  }
}
async function addUserAdmin(req, res) {
  var userr = req.body;
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

          res.send(userr);
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
      if (!user1.isVerified) {
        res.json({ error: "Account not verified" });
      } else {
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
      }
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

async function deleteUser(req, res) {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  console.log("delete");
  let user = await users.findUserbyId(req.params.id);
  if (user) {
    if (decoded.role === "admin") {
      users.deleteUser(req.params.id);
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
  console.log(req.params.id);
  let user = await users.findUserbyId(req.params.id);
  if (user) {
    if (decoded.role === "admin" || user._id == decoded._id) {
      console.log("update");
      console.log(req.body);
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
async function getUserByRole(req, res) {
  let user = await users.findAllUserByRole();
  if (user) {
    res.json(user);
  } else {
    res.json({ error: "User does not exist" });
  }
}
async function confirmEmail(req, res) {
  console.log("###### confirmm email #######");
  console.log(req.params.token);
  console.log(req.params.email);
  let token1 = await Token.findTokenbyToken(req.params.token);
  // token is not found into database i.e. token may have expired
  if (!token1) {
    return res.json({
      msg:
        "Your verification link may have expired. Please click on resend for verify your Email.",
    });
  }
  // if token is found then check valid user
  else {
    let user = await users.findUserbyEmail(req.params.email);
    // not valid user
    if (!user) {
      return res.status(401).send({
        msg:
          "We were unable to find a user for this verification. Please SignUp!",
      });
    }
    // user is already verified
    else if (user.isVerified) {
      return res
        .status(200)
        .send("User has been already verified. Please Login");
    }
    // verify user
    else {
      // change isVerified to true
      user.isVerified = true;
      user.save(function (err) {
        // error occur
        if (err) {
          return res.status(500).send({ msg: err.message });
        }
        // account successfully verified
        else {
          return res.redirect(
            "https://secure-ocean-54413.herokuapp.com/emailVerified"
          );
        }
      });
    }
  }
}

// google auth

const redirectURI = "api/user/auth/google/callback";

function getGoogleAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: `${SERVER_ROOT_URI}/${redirectURI}`,
    client_id: GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  return `${rootUrl}?${querystring.stringify(options)}`;
}

// Getting login URL
/* app.get("/auth/google/url", */
async function GetLoginUrl(req, res) {
  return res.send(getGoogleAuthURL());
}

function getTokens({ code, clientId, clientSecret, redirectUri }) {
  /*
   * Uses the code to get tokens
   * that can be used to fetch the user's profile
   */
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };

  return axios
    .post(url, querystring.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message);
    });
}

// Getting the user from Google with the code
/* app.get(`/auth/google/callback`, async  */
async function GetUserFromGoogle(req, res) {
  const code = req.query.code;
  console.log("get user from google");
  console.log(req.query.code);
  console.log("type");
  console.log(req.body.type);
  const { id_token, access_token } = await getTokens({
    code,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    redirectUri: `${SERVER_ROOT_URI}/${redirectURI}`,
  });
  console.log("id_token");
  console.log(id_token);
  console.log("access token");
  console.log(access_token);
  // Fetch the user's profile with the access token and bearer
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });

  console.log("google user");
  console.log(googleUser);
  let user = await users.findUserbyEmail(googleUser.email);
  if (user) {
    console.log("user");
    console.log(user);
    const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY);

    res.redirect(UI_ROOT_URI + "/auth/loginGoogle/" + token);
  } else {
    users.insertOneFromGoogle(googleUser).then((data) => {
      console.log("data");
      console.log(data);
      const registerToken = jwt.sign(data[0].toJSON(), process.env.SECRET_KEY);
      res.redirect(UI_ROOT_URI + "/auth/registerGoogle/" + registerToken);
    });
  }
  //res.json(token);

  /* res.cookie(COOKIE_NAME, token, {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
  });

  res.redirect(UI_ROOT_URI); */
}

// Getting the current user
/* app.get("/auth/me",  */
async function GetCurrentUser(req, res) {
  console.log("get me");
  try {
    /*  const decoded = jwt.verify(req.cookies[COOKIE_NAME], JWT_SECRET); */
    var decoded = jwt.verify(
      req.headers["authorization"],
      process.env.SECRET_KEY
    );
    console.log("decoded", decoded);
    return res.send(decoded);
  } catch (err) {
    console.log(err);
    res.send(null);
  }
}

module.exports = {
  addUser,
  addUserAdmin,
  login,
  profile,
  deleteUser,
  updateUser,
  getAllUsers,
  getUserById,
  confirmEmail,
  getUserByRole,
  GetLoginUrl,
  GetUserFromGoogle,
  GetCurrentUser,
};
