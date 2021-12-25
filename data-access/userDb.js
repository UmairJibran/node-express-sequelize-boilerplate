function makeUserDb({ User, sequelize, moment, isNil }) {
  return Object.freeze({ createUser });
  async function createUser({ ...requestInfo }) {
    const transaction = await sequelize.transaction();
    try {
      const user = await User.findOne({ where: { uid: requestInfo.uid } });
      if (isNil(user)) {
        await User.create(
          {
            name: requestInfo.name,
            email: requestInfo.email,
            image_url: requestInfo.imageUrl,
            provider: requestInfo.provider,
            uid: requestInfo.uid,
            last_login: moment.now(),
          },
          { transaction }
        );
      } else {
        user.last_login = moment.now();
        await user.save({ transaction });
      }

      await transaction.commit({});

      return {
        status: 200,
        response: requestInfo,
      };
    } catch (err) {
      console.error(err);
      return {
        status: 500,
        response: {
          message: "Internal server error",
          nerdInfo: err.message,
        },
      };
    }
  }
}

module.exports = { makeUserDb };
