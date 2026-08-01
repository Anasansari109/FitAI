const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  optimizeWorkoutPlan,
  optimizeDietPlan,
  coachChat,
} = require("../controllers/aiController");

// ==========================================
// AI Workout
// ==========================================

router.post(
  "/workout",
  authMiddleware,
  optimizeWorkoutPlan
);

// ==========================================
// AI Diet
// ==========================================

router.post(
  "/diet",
  authMiddleware,
  optimizeDietPlan
);

// ==========================================
// AI Coach
// ==========================================

router.post(
  "/chat",
  authMiddleware,
  coachChat
);
module.exports = router;