const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  saveWorkout,
  getWorkout,
  completeWorkout,
} = require("../controllers/workoutController");

router.post(
  "/save",
  authMiddleware,
  saveWorkout
);

router.get(
  "/",
  authMiddleware,
  getWorkout
);

router.put(
  "/complete",
  authMiddleware,
  completeWorkout
);

module.exports = router;