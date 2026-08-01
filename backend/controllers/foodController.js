const Food = require("../models/Food");

// =====================================================
// GET ALL FOODS
// =====================================================

const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find({
      isActive: true,
    });

    return res.status(200).json({
      success: true,
      count: foods.length,
      foods,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET FOOD BY ID
// =====================================================

const getFoodById = async (req, res) => {
  try {
    const food = await Food.findOne({
      id: req.params.id,
      isActive: true,
    });

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    return res.status(200).json({
      success: true,
      food,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET FOODS BY CATEGORY
// =====================================================

const getFoodsByCategory = async (
  req,
  res
) => {
  try {
    const foods = await Food.find({
      category: req.params.category,
      isActive: true,
    });

    return res.status(200).json({
      success: true,
      count: foods.length,
      foods,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// SEARCH FOODS
// =====================================================

const searchFoods = async (req, res) => {
  try {
    const keyword = req.query.q || "";

    const foods = await Food.find({
      isActive: true,
      name: {
        $regex: keyword,
        $options: "i",
      },
    });

    return res.status(200).json({
      success: true,
      count: foods.length,
      foods,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllFoods,
  getFoodById,
  getFoodsByCategory,
  searchFoods,
};