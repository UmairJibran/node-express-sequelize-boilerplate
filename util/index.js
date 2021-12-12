const _ = require("lodash");

const isTrue = value => value === true || value.toLowerCase() === "true";
const isEmpty = value => _.isEmpty(value);

Object.freeze(isTrue, isEmpty);
module.exports = { isTrue, isEmpty };
