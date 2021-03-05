const posts = require("../../models/post");

const addPost = async (req, res) => {
  const post = await posts.insertOne(req.body);
  if (post) {
    return res.status(200).send(post);
  }

  return res.status(400).end();
};

const getPosts = async (req, res) => {
  try {
    const postsToReturn = await posts.findAll();
    if (postsToReturn) {
      return res.status(200).send(postsToReturn);
    }

    return res.status(400).end();
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  addPost,
  getPosts,
};
