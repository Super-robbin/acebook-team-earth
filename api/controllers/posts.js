const Post = require("../models/post");
const User = require("../models/user")
const TokenGenerator = require("../lib/token_generator");


const PostsController = {
  Index: (req, res) => {
    Post.find().populate("comments").exec((err, posts) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ posts: posts, token: token });
    });
  },
  

  Create: (req, res) => {
    console.log("inside create")
    const post = new Post({ message: req.body.message, image: req.file.filename, user: req.user_id });
    console.log(req.file)
    post.save((err, savedpost) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(savedpost, 'savedpost')
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  },
};

module.exports = PostsController;
