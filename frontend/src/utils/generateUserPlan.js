import { planSelector } from "./planSelector";

import { generateWorkoutPlan } from "./generateWorkoutPlan";
import { generateDietPlan } from "./generateDietPlan";

export function generateUserPlan(userData) {
  const {
    workoutTemplate,
    dietTemplate,
  } = planSelector(userData);

  return {
    workoutPlan:
      generateWorkoutPlan(workoutTemplate),

    dietPlan:
      generateDietPlan(dietTemplate),
  };
}