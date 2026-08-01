const Workout = require("../models/Workout");
const Diet = require("../models/Diet");
console.log("Generate API Hit");
const {
  generateAIPlan,
} = require("../services/aiPlanGenerator");

// =====================================================
// GENERATE USER PLAN
// =====================================================

const generateUserPlan = async (
  req,
  res
) => {
  try {
    const {
      personalInfo,
      goal,
      lifestyle,
      food,
      workout,
    } = req.body;

    const onboardingData = {
      personalInfo,
      goal,
      lifestyle,
      food,
      workout,
    };

    console.log(
      "\nGenerating AI Plan...\n"
    );

    const {
      workoutPlan,
      dietPlan,
    } = await generateAIPlan(
      onboardingData
    );

    await Workout.findOneAndUpdate(
      {
        user: req.user.id,
      },
      {
        user: req.user.id,
        workoutPlan,
      },
      {
        upsert: true,
        new: true,
      }
    );

    await Diet.findOneAndUpdate(
      {
        user: req.user.id,
      },
      {
        user: req.user.id,
        dietPlan,
      },
      {
        upsert: true,
        new: true,
      }
    );
console.log("Calling Gemini...");
    return res.status(200).json({
      success: true,
      message:
        "AI Plan generated successfully.",
      plan: {
        workoutPlan,
        dietPlan,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateUserPlan,
};