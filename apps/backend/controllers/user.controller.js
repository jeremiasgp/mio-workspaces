const userService = require("../services/user.service");

async function getUsers(req, res, next) {
  try {
    const users = await userService.getAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await userService.getById(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
}

async function createUser(req, res, next) {
  try {
    const user = await userService.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

module.exports = { createUser, getUserById, getUsers };
