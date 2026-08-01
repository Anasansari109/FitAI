const express = require("express");

const router = express.Router();

const {
  getAllFoods,
  getFoodById,
  getFoodsByCategory,
  searchFoods,
} = require("../controllers/foodController");

// =====================================================
// FOOD ROUTES
// =====================================================

// Get All Foods
router.get("/", getAllFoods);

// Search Foods
router.get("/search", searchFoods);

// Get Foods By Category
router.get(
  "/category/:category",
  getFoodsByCategory
);

// Get Single Food
router.get("/:id", getFoodById);

module.exports = router; 