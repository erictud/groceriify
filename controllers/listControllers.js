const BadRequest = require("./../errors/badRequest");
const List = require("./../models/List");
const User = require("./../models/User");
var mongoose = require("mongoose");

exports.createList = async (req, res, next) => {
  const { name, password, shopsList } = req.body;

  // verify list
  if (!name || !password || !shopsList) throw new BadRequest("Invalid data!");

  // create list
  const list = await List.create({
    name,
    password,
    shopsList,
    userAdmin: req.user.userId,
    userList: [req.user.userId],
  });

  // update user
  const user = await User.findOne({ _id: req.user.userId });
  user.shoppingLists = [...user.shoppingLists, list._id];
  await user.save();

  res.status(201).json({ list });
};

exports.getListItems = async (req, res, next) => {
  res.status(200).json({ msg: "List's item" });
};

exports.deleteList = async (req, res, next) => {
  res.status(201).json({ msg: "List deleted successfully" });
};

exports.joinList = async (req, res, next) => {
  const { listId } = req.params;
  const { password } = req.body;
  console.log(listId, password);

  //verify if list exists
  if (!mongoose.Types.ObjectId.isValid(listId)) throw new BadRequest("Invalid credentials");
  const list = await List.findOne({ _id: listId });
  if (!list) throw new BadRequest("Invalid credentials");

  //compare passwords
  const match = await list.passwordsMatch(password);
  if (!match) throw new BadRequest("Invalid credentials");

  const { userId } = req.user;
  const user = await User.findOne({ _id: req.user.userId });

  //add userId to list
  await List.findByIdAndUpdate(listId, { userList: [...list.userList, userId] });

  //add listId to user
  await User.findByIdAndUpdate(userId, { shoppingLists: [...user.shoppingLists, list._id] });

  res.status(200).json({ msg: "List joined successfully" });
};

exports.leaveList = async (req, res) => {
  const { listId } = req.params;
  const { userId } = req.user;

  const list = await List.findById(listId);

  // verify if user exists
  const userList = JSON.parse(JSON.stringify(list.userList));
  const userIsMember = userList.find((el) => el === userId);
  if (!userIsMember) throw new BadRequest("Already not a member of the list");

  // remove user ID from list
  const newUserList = userList.filter((e) => e !== userId);
  await List.findByIdAndUpdate(listId, { userList: newUserList });

  // remove list ID from user
  const user = await User.findById(userId);
  const shoppingLists = JSON.parse(JSON.stringify(user.shoppingLists));
  const newShoppingLists = shoppingLists.filter((e) => e !== listId);
  await User.findByIdAndUpdate(userId, { shoppingLists: newShoppingLists });

  res.status(200).json({ msg: "List left successfully!" });
};
