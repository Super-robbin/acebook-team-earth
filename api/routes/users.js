const tokenChecker = require("../token_checker/token_checker")
const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/current", tokenChecker, UsersController.CurrentUser);
router.post("/", UsersController.Create);

module.exports = router;
