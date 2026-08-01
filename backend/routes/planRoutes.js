const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  generateUserPlan,
} = require("../controllers/planController");

// =====================================================
// PLAN ROUTES
// =====================================================

router.post(
  "/generate",
  authMiddleware,
  generateUserPlan
);

module.exports = router;