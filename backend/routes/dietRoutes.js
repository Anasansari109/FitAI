const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  saveDiet,
  getDiet,
  completeMeal,
} = require("../controllers/dietController");

router.post(
  "/save",
  authMiddleware,
  saveDiet
);

router.get(
  "/",
  authMiddleware,
  getDiet
);

router.put(
  "/complete",
  authMiddleware,
  completeMeal
);

module.exports = router;