const Onboarding = require("../models/Onboarding");
const User = require("../models/User");

// =====================================================
// SAVE ONBOARDING
// =====================================================

const saveOnboarding = async (req, res) => {
  try {
    const onboarding =
      await Onboarding.findOneAndUpdate(
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

    // Mark onboarding as completed
    await User.findByIdAndUpdate(req.user.id, {
      isOnboardingCompleted: true,
    });

    return res.status(200).json({
      success: true,
      message: "Onboarding saved successfully",
      onboarding,
    });
  } catch (error) {
  console.error("SAVE ONBOARDING ERROR:");
  console.error(error);

  return res.status(500).json({
    success: false,
    message: error.message,
  });
}
};

// =====================================================
// GET ONBOARDING
// =====================================================

const getOnboarding = async (req, res) => {
  try {
    const onboarding =
      await Onboarding.findOne({
        user: req.user.id,
      });

    if (!onboarding) {
      return res.status(404).json({
        success: false,
        message: "Onboarding data not found",
      });
    }

    return res.status(200).json({
      success: true,
      onboarding,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  saveOnboarding,
  getOnboarding,
};