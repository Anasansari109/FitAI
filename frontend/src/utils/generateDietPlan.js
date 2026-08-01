export function generateDietPlan(template) {
  return {
    templateId: template.id,

    calories: template.calories,

    proteinGoal: template.proteinGoal,

    meals: template.meals,
  };
}