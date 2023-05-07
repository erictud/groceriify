const User = require("../../models/User");
const ForbiddenContentError = require("./../../errors/forbiddenContent");

const limitListsNumberPerUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.userId });

  // check if user is already a member
  const { listId } = req.params;
  const userAlreadyJoined = JSON.parse(JSON.stringify(user.shoppingLists)).find(
    (el) => el === listId
  );
  if (userAlreadyJoined) throw new ForbiddenContentError("You are already a member of the list");

  // check if user has already reached the limit
  if (user.shoppingLists.length < 3) next();
  else
    throw new ForbiddenContentError(
      "Already member or admin in three lists! Leave one in order to join / create one!"
    );
};

module.exports = limitListsNumberPerUser;
