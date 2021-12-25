const moment = require("moment");

const { isNil } = require("./../util");

const { User, sequelize } = require("./../models");

const { makeUserDb } = require("./userDb");

const userDb = makeUserDb({ moment, User, sequelize, isNil });

module.exports = { userDb };
