import workoutTemplates from "../data/workoutTemplates";
import dietTemplates from "../data/dietTemplates";

export function planSelector(userData) {
  const workoutTemplate =
    workoutTemplates.find(
      (plan) =>
        plan.goal === userData.goal &&
        plan.level === userData.level &&
        plan.location === userData.location
    ) || workoutTemplates[0];

  const dietTemplate =
    dietTemplates.find(
      (plan) =>
        plan.goal === userData.goal &&
        plan.livingType === userData.livingType &&
        plan.foodType === userData.foodType
    ) || dietTemplates[0];

  return {
    workoutTemplate,
    dietTemplate,
  };
}