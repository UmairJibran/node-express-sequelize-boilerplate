const express = require("express");
const router = express.Router();
// Controllers import
const { signinUser } = require("../controllers");

router.post("/sign-in", signinUser);

module.exports = router;
