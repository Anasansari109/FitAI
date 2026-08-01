const Diet = require("../models/Diet");

// =====================================================
// SAVE DIET
// =====================================================

const saveDiet = async (req, res) => {
  try {
    const { dietPlan } = req.body;

    if (!dietPlan) {
      return res.status(400).json({
        success: false,
        message: "Diet plan is required",
      });
    }

    const diet = await Diet.findOneAndUpdate(
      {
        user: req.user.id,
      },
      {
        user: req.user.id,
        dietPlan,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Diet saved successfully",
      diet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET DIET
// =====================================================

const getDiet = async (req, res) => {
  try {
    const diet = await Diet.findOne({
      user: req.user.id,
    });

    if (!diet) {
      return res.status(404).json({
        success: false,
        message: "Diet plan not found",
      });
    }

    return res.status(200).json({
      success: true,
      diet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// COMPLETE MEAL
// =====================================================

const completeMeal = async (req, res) => {
  try {
    const { meal } = req.body;

    if (!meal) {
      return res.status(400).json({
        success: false,
        message: "Meal is required",
      });
    }

    const diet = await Diet.findOne({
      user: req.user.id,
    });

    if (!diet) {
      return res.status(404).json({
        success: false,
        message: "Diet not found",
      });
    }

    if (!diet.completedMeals.includes(meal)) {
      diet.completedMeals.push(meal);
      await diet.save();
    }

    return res.status(200).json({
      success: true,
      message: "Meal completed successfully",
      diet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  saveDiet,
  getDiet,
  completeMeal,
};