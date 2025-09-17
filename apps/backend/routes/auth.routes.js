const { Router } = require("express")
const { signup, login, logout, me } = require("../controllers/auth.controller")
const { authMiddleware } = require("../middlewares/authMiddleware")

const router = Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/me", authMiddleware, me)

module.exports = router
