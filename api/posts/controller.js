const posts = require("../../models/post");

const addPost = async (req, res) => {
  const post = await posts.insertOne(req.body);
  if (post) {
    return res.status(200).send(post);
  }

  return res.status(400).end();
};

module.exports = {
  addPost,
};
