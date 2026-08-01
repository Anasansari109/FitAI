const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  saveProgress,
  getProgress,
  addWeight,
} = require("../controllers/progressController");

router.post(
  "/save",
  authMiddleware,
  saveProgress
);

router.get(
  "/",
  authMiddleware,
  getProgress
);

router.put(
  "/weight",
  authMiddleware,
  addWeight
);

module.exports = router;