const authService = require("../services/auth.service")

async function signup(req, res, next) {
  try {
    const user = await authService.signup(req.body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  try {
    const token = await authService.login(req.body.email, req.body.password)
    res.json({ token })
  } catch (err) {
    next(err)
  }
}

async function logout(req, res) {
  // en mobile SPA basta con borrar el token en cliente
  res.json({ message: "Logged out successfully" })
}

async function me(req, res) {
  res.json(req.user)
}

module.exports = { signup, login, logout, me }
