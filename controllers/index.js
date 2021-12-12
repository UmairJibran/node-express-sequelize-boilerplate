const { foo } = require("./foo");

const createFoo = foo({ message: "Hello, world!" });

module.exports = { createFoo };
