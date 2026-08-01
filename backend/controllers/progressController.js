const Progress = require("../models/Progress");

// =====================================================
// SAVE / UPDATE PROGRESS
// =====================================================

const saveProgress = async (
  req,
  res
) => {
  try {
    const progress =
      await Progress.findOneAndUpdate(
        {
          user: req.user.id,
        },
        {
          user: req.user.id,
          ...req.body,
        },
        {
          new: true,
          upsert: true,
          runValidators: true,
        }
      );

    return res.status(200).json({
      success: true,
      message:
        "Progress saved successfully",
      progress,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET PROGRESS
// =====================================================

const getProgress = async (
  req,
  res
) => {
  try {
    const progress =
      await Progress.findOne({
        user: req.user.id,
      });

    if (!progress) {
      return res.status(404).json({
        success: false,
        message:
          "Progress not found",
      });
    }

    return res.status(200).json({
      success: true,
      progress,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// ADD WEIGHT
// =====================================================

const addWeight = async (
  req,
  res
) => {
  try {
    const { weight, date } =
      req.body;

    if (!weight) {
      return res.status(400).json({
        success: false,
        message:
          "Weight is required",
      });
    }

    const progress =
      await Progress.findOne({
        user: req.user.id,
      });

    if (!progress) {
      return res.status(404).json({
        success: false,
        message:
          "Progress not found",
      });
    }

    progress.currentWeight = weight;

    progress.weightHistory.push({
      weight,
      date:
        date || new Date(),
    });

    await progress.save();

    return res.status(200).json({
      success: true,
      message:
        "Weight added successfully",
      progress,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  saveProgress,
  getProgress,
  addWeight,
};