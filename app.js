const express = require("express");

const router = require("./routes");

const app = express();

app.use("/api", router);

module.exports = app;
