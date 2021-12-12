const express = require("express");
const router = express.Router();
// Controllers
const { createFoo } = require("../controllers");

router.get("/", createFoo);

module.exports = router;
