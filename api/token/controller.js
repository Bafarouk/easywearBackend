const users = require("../../models/user");
const token = require("../../models/token");

async function confirmEmail(req, res) {
  console.log("###### confirmm email #######");
  console.log(req.params.token);
  console.log(req.params.email);
  const c = req.params.tt;
  let abc = token.findTokenbyToken(req.params.token);
  // token is not found into database i.e. token may have expired
  if (!abc) {
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
          return res
            .status(200)
            .send("Your account has been successfully verified");
        }
      });
    }
  }
}

module.exports = {
  confirmEmail,
};
