require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const calendarRoutes = require("./routes/calendar.routes");
const eventRoutes = require("./routes/event.routes");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Auth
app.use("/auth", authRoutes);

// Users
app.use("/users", userRoutes);

// Calendar
app.use("/calendar", calendarRoutes);

// Events
app.use("/events", eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
