const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const onboardingRoutes = require("./routes/onboardingRoutes");
const workoutRoutes =
  require("./routes/workoutRoutes");

const dietRoutes =
  require("./routes/dietRoutes");

const progressRoutes =
  require("./routes/progressRoutes");

  const foodRoutes = require("./routes/foodRoutes");

const exerciseRoutes = require("./routes/exerciseRoutes");

const planRoutes = require("./routes/planRoutes");

const aiRoutes = require("./routes/aiRoutes");

const dashboardRoutes = require(
  "./routes/dashboardRoutes"
);

const app = express();

/* Database Connection */
connectDB();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/auth", authRoutes);

app.use("/api/onboarding", onboardingRoutes);

app.use("/api/workout", workoutRoutes);

app.use("/api/diet", dietRoutes);

app.use("/api/progress", progressRoutes);
app.use("/api/foods", foodRoutes);

app.use(
  "/api/exercises",
  exerciseRoutes
);

app.use("/api/ai", aiRoutes);

app.use("/api/plan", planRoutes);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FitAI Backend Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});