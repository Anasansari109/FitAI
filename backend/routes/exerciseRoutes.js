const express = require("express");

const router = express.Router();

const {
  getAllExercises,
  getExerciseById,
  getExercisesByCategory,
  searchExercises,
} = require("../controllers/exerciseController");

// =====================================================
// EXERCISE ROUTES
// =====================================================

// Get All Exercises
router.get("/", getAllExercises);

// Search Exercises
router.get("/search", searchExercises);

// Get Exercises By Category
router.get(
  "/category/:category",
  getExercisesByCategory
);

// Get Single Exercise
router.get(
  "/:id",
  getExerciseById
);

module.exports = router;