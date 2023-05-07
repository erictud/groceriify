const express = require("express");
const authenticateUser = require("./../utils/auth");
const listControllers = require("./../controllers/listControllers");
const limitListsNumberPerUser = require("./../utils/list/limitUser");

const router = express.Router();

// verifies if is logged in
router.use(authenticateUser);

router.route("/list").post(limitListsNumberPerUser, listControllers.createList);

router.route("/list/:listId").delete(listControllers.deleteList).get(listControllers.getListItems);

router.route("/join-list/:listId").post(limitListsNumberPerUser, listControllers.joinList);

router.route("/leave-list/:listId").get(listControllers.leaveList);

module.exports = router;
