module.exports = {
  port: process.env.PORT || 3100,
  mongodb: {
    name: "pidev",
    url:
      process.env.MONGO_URL ||
      "mongodb+srv://root:root@cluster0.o6bqt.mongodb.net/PiDev?retryWrites=true&w=majority",
    options: {},
  },
  FACEBOOK_CLIENT_ID: "480202802514385",
  FACEBOOK_CLIENT_SECRET: "0d699a792a17a9c9a6a8bb720cd087d7",
};
