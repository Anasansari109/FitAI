export function generateWorkoutPlan(template) {
  return {
    templateId: template.id,

    durationWeeks: template.durationWeeks,

    days: template.days,
  };
}