const express = require("express");
const moment = require("moment");
const router = express.Router();
const { versionCompatiblity } = require("../middleware/");

// Middlewares
// const authenticateUser = require("../middleware/authenticateUser"); // TODO: uncomment when to use

// routes

router.all("/", versionCompatiblity, (req, res) => {
  res.status(200).json({
    version: process.env.VERSION,
    currentTimeStamp: moment.now(),
  });
});

router.use("/users", versionCompatiblity, require("./users"));

module.exports = router;
