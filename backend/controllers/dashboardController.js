const User = require("../models/User");
const Workout = require("../models/Workout");
const Diet = require("../models/Diet");
const Progress = require("../models/Progress");

// =====================================================
// GET DASHBOARD
// =====================================================

const getDashboard = async (
  req,
  res
) => {
  try {
    const user = await User.findById(
      req.user.id
    ).select("-password");

    const workout =
      await Workout.findOne({
        user: req.user.id,
      });

    const diet =
      await Diet.findOne({
        user: req.user.id,
      });

    const progress =
      await Progress.findOne({
        user: req.user.id,
      });

    return res.status(200).json({
      success: true,

      dashboard: {
        user,

        workout,

        diet,

        progress,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};