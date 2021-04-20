const posts = require("../../models/post");

const addPost = async (req, res) => {
  try {
    const post = await posts.insertOne(req.body);

    if (post) {
      return res.status(202).send(post);
    }
  } catch (e) {
    return res.status(400).end();
  }
};

const getPosts = async (req, res) => {
  try {
    const postsToReturn = await posts.findAll();
    if (postsToReturn) {
      return res.status(200).send(postsToReturn);
    }

    return res.status(404).send("Posts werent found").end();
  } catch (error) {
    res.send(error.message);
  }
};

const getUserPosts = async (req, res) => {
  try {
    const postsToReturn = await posts.findAllPostsByUserId(req.params.userid);
    if (postsToReturn) {
      return res.status(200).send(postsToReturn);
    }

    return res.status(404).send("Posts werent found").end();
  } catch (error) {
    res.send(error.message);
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await posts.findPostbyId(req.params.id);
    if (post) {
      return res.status(200).send(post);
    }
    return res.status(404).send("Post with the given ID was not found").end();
  } catch (error) {
    res.send(error.message).end();
  }
};

const putPost = async (req, res) => {
  try {
    const post = await posts.updatePost(req.params.id, req.body);
    if (post) {
      return res.status(200).send(post);
    }
    return res.status(400).send("Post did not update").end();
  } catch (error) {
    res.send(error.message).end();
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await posts.deletePost(req.params.id);
    if (post) {
      return res.status(200).send(post);
    }
    return res.status(404).send("Post wasnt found").end();
  } catch (error) {
    res.send(error.message).end();
  }
};

async function getEventPosts(req,res){
    let eventss_id = req.params.eventId;
    const list_posts = await posts.findEventPosts(eventss_id);
    if (list_posts){
      return res.status(200).send(list_posts);
    }
    return res.status(404).send("aloooo");
}

async function countPosts(req,res){
  let eventss_id = req.params.eventId;
  const nbr_posts = await posts.countPostsByEvent(eventss_id);
  if(nbr_posts){
    return res.json(nbr_posts);
  }
  return res.status(404).send();
}

module.exports = {
  addPost,
  getPosts,
  getPostById,
  putPost,
  deletePost,
  getUserPosts,
  getEventPosts,
  countPosts
};
