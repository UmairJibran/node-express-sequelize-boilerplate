const express = require("express");

const router = require("./routes");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use("/api", router);

module.exports = app;
