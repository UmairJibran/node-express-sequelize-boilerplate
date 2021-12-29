const { auth } = require("../firebase");
const config = require("../config");

const authenticateUser = async (req, res, next) => {
  try {
    if (config.get("env") === "test_remote") next();
    const headerToken = req.headers.authorization;
    if (!headerToken) {
      return res.status(401).send({ message: "No token provided" });
    }

    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
      res.status(401).send({ message: "Invalid token" });
    }

    let token = headerToken.split(" ")[1];
    await auth.verifyIdToken(token);

    next();
  } catch (error) {
    req.log.error(error);
    res.status(403).send({ message: "Could not authorize" });
  }
};

module.exports = authenticateUser;
