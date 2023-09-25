const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // username: { type: String, required: true },
  // posts: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Post"
  // }],
  // comments: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Comment"
  // }]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
