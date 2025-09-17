var express = require('express');
var router = express.Router();

const { getUsers, getUserById, createUser } = require("../controllers/user.controller");
const { authMiddleware } = require("../middlewares/authMiddleware");

router.use(authMiddleware)

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

module.exports = router;