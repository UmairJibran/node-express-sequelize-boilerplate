const express = require("express");
const router = express.Router();

// Routers
const fooRouter = require("./foo");

// Middlewares
// const authenticateUser = require("../middleware/authenticateUser"); // TODO: uncomment when to use

// routes
router.get("/", (req, res) => {
	res.status(200).send("Release 2.0.0");
});

router.use("/foo", fooRouter);

module.exports = router;
