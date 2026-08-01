const {
  optimizeWorkout,
} = require("../services/aiWorkoutService");

const {
  optimizeDiet,
} = require("../services/aiDietService");

const {
  chatWithCoach,
} = require("../services/aiCoachService");

// ==========================================
// AI Workout Optimizer
// ==========================================

const optimizeWorkoutPlan = async (
  req,
  res
) => {
  try {
    const {
      onboarding,
      workoutTemplate,
    } = req.body;

    const result =
      await optimizeWorkout({
        onboarding,
        workoutTemplate,
      });

    return res.status(200).json({
      success: true,
      workoutPlan:
        result.workoutPlan || result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// AI Diet Optimizer
// ==========================================

const optimizeDietPlan = async (
  req,
  res
) => {
  try {
    const {
      onboarding,
      dietTemplate,
    } = req.body;

    const result =
      await optimizeDiet({
        onboarding,
        dietTemplate,
      });

    return res.status(200).json({
      success: true,
      dietPlan:
        result.dietPlan || result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// FitAI Coach
// ==========================================

const coachChat = async (
  req,
  res
) => {
  try {
    const {
      onboarding,
      workoutPlan,
      dietPlan,
      message,
    } = req.body;

    const reply =
      await chatWithCoach({
        onboarding,
        workoutPlan,
        dietPlan,
        message,
      });

    return res.status(200).json({
      success: true,
      reply,
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
  optimizeWorkoutPlan,
  optimizeDietPlan,
  coachChat,
};