const Comment = require("../models/comment");
const Post = require("../models/post");
const TokenGenerator = require("../lib/token_generator");

const CommentsController = {
  Index: (req, res) => {
    Comment.find()
      .populate("user")
      .exec((err, comments) => {
        if (err) {
          throw err;
        }
        const token = TokenGenerator.jsonwebtoken(req.user_id);
        res.status(200).json({ comments: comments, token: token });
      });
  },
  Create: (req, res) => {
    const postId = req.body.post_id;
    const comment = new Comment({
      content: req.body.content,
      user: req.user_id,
      post: postId,
    });
    comment.save((err, savedComment) => {
      if (err) {
        throw err;
      }
      Post.findByIdAndUpdate(
        postId,
        { $push: { comments: savedComment._id } },
        { new: true, useFindAndModify: false },
        (error) => {
          if (error) {
            throw error;
          }
        }
      );
      savedComment
        .populate("user")
          .execPopulate()
          .then(it => { 
            const token = TokenGenerator.jsonwebtoken(req.user_id);
            res.status(201).json({ message: "OK", token: token, comment: it });
          })
    });
  },
};

module.exports = CommentsController;
