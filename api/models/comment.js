const mongoose = require("mongoose");


const CommentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }, 
    
    
}, { timestamps: true } );

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment; 
