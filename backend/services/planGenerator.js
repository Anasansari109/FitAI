const workoutTemplates = require("../shared/workoutTemplates");
const dietTemplates = require("../shared/dietTemplates");

// =====================================================
// FIND WORKOUT TEMPLATE
// =====================================================

const findWorkoutTemplate = (onboarding) => {
  const goal = onboarding.goal?.primaryGoal;

  const level = onboarding.workout?.experience;

  let location =
    onboarding.lifestyle?.workoutLocation;

  if (location === "Gym Access")
    location = "Gym";

  if (location === "Home Workout")
    location = "Home";

  if (location === "Both")
    location = "Gym";

  return workoutTemplates.find(
    (plan) =>
      plan.goal === goal &&
      plan.level.toLowerCase() ===
        level.toLowerCase() &&
      plan.location.toLowerCase() ===
        location.toLowerCase()
  );
};

// =====================================================
// FIND DIET TEMPLATE
// =====================================================

const findDietTemplate = (onboarding) => {
  const goal =
    onboarding.goal?.primaryGoal;

  const level =
    onboarding.workout?.experience;

  const livingType =
    onboarding.lifestyle?.livingType;

  let foodType =
    onboarding.food?.foodType;

  // =============================
  // Frontend -> Template Mapping
  // =============================

  if (foodType === "vegetarian") {
    foodType = "Vegetarian";
  }

  if (foodType === "eggetarian") {
    foodType = "Eggetarian";
  }

  if (foodType === "non_vegetarian") {
    foodType = "Non Vegetarian";
  }

  console.log("Searching Diet Template");

  console.log({
    goal,
    level,
    livingType,
    foodType,
  });

  const template =
    dietTemplates.find(
      (plan) =>
        plan.goal === goal &&
        plan.level.toLowerCase() ===
          level.toLowerCase() &&
        plan.livingType.toLowerCase() ===
          livingType.toLowerCase() &&
        plan.foodType.toLowerCase() ===
          foodType.toLowerCase()
    );

  if (!template) {
    console.log(
      "No matching diet template found."
    );
  }

  return template;
};

// =====================================================
// GENERATE COMPLETE PLAN
// =====================================================

const generatePlan = (onboarding) => {
  if (!onboarding) {
    throw new Error(
      "Onboarding data is required."
    );
  }

  const workoutPlan =
    findWorkoutTemplate(onboarding);

  if (!workoutPlan) {
    throw new Error(
      "Workout template not found."
    );
  }

  const dietPlan =
    findDietTemplate(onboarding);

  if (!dietPlan) {
    throw new Error(
      "Diet template not found."
    );
  }

  return {
    workoutPlan,
    dietPlan,
  };
};

// =====================================================
// EXPORTS
// =====================================================

module.exports = {
  generatePlan,
};