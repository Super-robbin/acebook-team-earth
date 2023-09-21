const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment: String
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;