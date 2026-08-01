const {
  generatePlan,
} = require("./planGenerator");

const {
  optimizeWorkout,
} = require("./aiWorkoutService");

const {
  optimizeDiet,
} = require("./aiDietService");

// ==========================================
// AI PLAN GENERATOR
// ==========================================

const generateAIPlan = async (
  onboarding
) => {
  // Step 1
  // Generate Base Template

  const basePlan =
    generatePlan(onboarding);

  // Step 2
  // AI Workout Optimization

  const optimizedWorkout =
    await optimizeWorkout({
      onboarding,
      workoutTemplate:
        basePlan.workoutPlan,
    });

  // Step 3
  // AI Diet Optimization

  const optimizedDiet =
    await optimizeDiet({
      onboarding,
      dietTemplate:
        basePlan.dietPlan,
    });

  // Step 4
  // Return Final Plan

  return {
    workoutPlan:
      optimizedWorkout
        ?.workoutPlan ||
      basePlan.workoutPlan,

    dietPlan:
      optimizedDiet?.dietPlan ||
      basePlan.dietPlan,
  };
};

module.exports = {
  generateAIPlan,
};