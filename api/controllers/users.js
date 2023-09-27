const User = require("../models/user");

const UsersController = {
  Index: (req, res) => {
    const user = {id: req.params.user_id, username: req.username, picture: req.picture}
    User.find((err, users) => {
      if (err) {
        throw err;
      }
      res.status(200).json({ users: users})
    })
  },

  Create: (req, res) => {
    const email = req.body.email;
    User.findOne({ email: email }).then((user) => {
      if (user) {
        console.log("auth error: user already exists");
        res.status(401).json({ message: "User already exists! Please login!" });
      } else {
        const user = new User(req.body);
        user.save((err) => {
          if (err) {
            res.status(400).json({ message: "Bad request" });
          } else {
            res.status(201).json({ message: "OK" });
          }
        });
      }
    });
  },
};

module.exports = UsersController;
