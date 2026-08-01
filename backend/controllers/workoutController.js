const Workout = require("../models/Workout");

// =====================================================
// SAVE WORKOUT
// =====================================================

const saveWorkout = async (req, res) => {
  try {
    const { workoutPlan } = req.body;

    if (!workoutPlan) {
      return res.status(400).json({
        success: false,
        message: "Workout plan is required",
      });
    }

    const workout = await Workout.findOneAndUpdate(
      {
        user: req.user.id,
      },
      {
        user: req.user.id,
        workoutPlan,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Workout saved successfully",
      workout,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET WORKOUT
// =====================================================

const getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      user: req.user.id,
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout plan not found",
      });
    }

    return res.status(200).json({
      success: true,
      workout,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// COMPLETE WORKOUT
// =====================================================

const completeWorkout = async (
  req,
  res
) => {
  try {
    const { day } = req.body;

    if (day === undefined) {
      return res.status(400).json({
        success: false,
        message: "Workout day is required",
      });
    }

    const workout = await Workout.findOne({
      user: req.user.id,
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found",
      });
    }

    if (!workout.completedDays.includes(day)) {
      workout.completedDays.push(day);
      await workout.save();
    }

    return res.status(200).json({
      success: true,
      message: "Workout completed successfully",
      workout,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  saveWorkout,
  getWorkout,
  completeWorkout,
};