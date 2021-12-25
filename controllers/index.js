const { createUser } = require("../use-cases");

const { userSignin } = require("./users");
const { isNil } = require("../util");

const signinUser = userSignin({ createUser, isNil });

module.exports = { signinUser };
