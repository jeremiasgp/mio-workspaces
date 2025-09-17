const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) return res.status(401).json({ message: "Unauthorized" })

  try {
    const payload = jwt.verify(token, JWT_SECRET)
    req.user = payload
    next()
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" })
  }
}

module.exports = { authMiddleware }
