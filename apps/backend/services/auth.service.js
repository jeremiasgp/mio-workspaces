const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"

async function signup(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10)
  /*const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      userId: crypto.randomUUID(),
    },
  })
  return user
  */
 return await Promise.resolve({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      userId: crypto.randomUUID(),
    });
}

async function login(email, password) {
  /*const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error("Invalid credentials")

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error("Invalid credentials")*/

  const user = { id: "456456", email: "user@gmail.com" };

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  })
  return token
}

module.exports = { signup, login }
