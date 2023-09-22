const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

const Comment = mongoose.model("Comment", CommentSchema);
const doc = new Comment();
console.log(CommentSchema)
module.exports = Comment;