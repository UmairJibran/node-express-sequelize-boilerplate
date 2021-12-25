function userSignin({ createUser, isNil }) {
  return async (req, res) => {
    const { name, email, imageUrl, provider, uid } = req.body;
    if (isNil(name)) {
      return res.status(403).json({
        message: "name is required",
      });
    }
    if (isNil(email)) {
      return res.status(403).json({
        message: "email is required",
      });
    }
    if (isNil(imageUrl)) {
      return res.status(403).json({
        message: "imageUrl is required",
      });
    }
    if (isNil(provider)) {
      return res.status(403).json({
        message: "provider is required",
      });
    }
    if (isNil(uid)) {
      return res.status(403).json({
        message: "uid is required",
      });
    }

    const { status, response } = await createUser({
      name,
      email,
      imageUrl,
      provider,
      uid,
    });

    return res.status(status).json(response);
  };
}

module.exports = { userSignin };
