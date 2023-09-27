const Post = require("../models/post");
const User = require("../models/user")
const TokenGenerator = require("../lib/token_generator");


const PostsController = {
  Index: (req, res) => {

    Post.find().populate("comments").populate("user").exec((err, posts) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ posts: posts, token: token });
    });
  },
  
  Create: (req, res) => {
    let post = {}
    if (!req.file) {
      post = new Post({ message: req.body.message, user: req.user_id });
    } else {
      post = new Post({ message: req.body.message, image: req.file.filename, user: req.user_id });
    }
    post.save((err) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id);
      res.status(201).json({ message: "OK", token: token });
    });
  },

  AddLike: (req, res) => {
    Post.findOne({_id: req.params.post_id}).populate("comments").populate("user").exec((err, post) => {
      if (err) {
        throw err;
      }
      const user = req.user_id;
      const isPostLikedByUser = post.likes.includes(user)
      if (isPostLikedByUser) {
        post.likes.pop(user)
      } else {
        post.likes.push(user)
      }
      post.save((err) => {
        if (err) {
          throw err
        }
        res.status(201).json({post: post})
      })
    })
  }
};

module.exports = PostsController;
