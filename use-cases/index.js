const { userDb } = require("../data-access");

const { registerUser } = require("./createUser");

const createUser = registerUser({ userDb });

module.exports = { createUser };
