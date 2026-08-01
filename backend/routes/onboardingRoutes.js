const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  saveOnboarding,
  getOnboarding,
} = require("../controllers/onboardingController");

router.post(
  "/save",
  authMiddleware,
  saveOnboarding
);

router.get(
  "/",
  authMiddleware,
  getOnboarding
);

module.exports = router;