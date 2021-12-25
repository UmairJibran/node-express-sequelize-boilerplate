function registerUser({ userDb }) {
  return async (requestInfo) => {
    const { name, email, imageUrl, provider, uid } = requestInfo;
    const response = await userDb.createUser({
      name,
      email,
      imageUrl,
      provider,
      uid,
    });
    return response;
  };
}

module.exports = { registerUser };
