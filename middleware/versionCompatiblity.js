const versionCompatiblity = async (req, res, next) => {
  try {
    const { version } = req.headers;
    if (!version) {
      return res.status(401).json({ message: "Version not provided" });
    }

    if (version !== process.env.VERSION) {
      return res.status(401).json({
        message: "Version not supported, kindly update your application",
      });
    }

    next();
  } catch (error) {
    req.log.error(error);
    res.status(403).send({ message: "Could not verify app" });
  }
};

module.exports = versionCompatiblity;
