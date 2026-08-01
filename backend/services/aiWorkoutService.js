const {
  generateAIResponse,
} = require("./openAIService");

const {
  getWorkoutPrompt,
} = require("../prompts/workoutPrompt");

const {
  parseAIResponse,
} = require("../utils/parseAIResponse");

// ==========================================
// AI Workout Optimizer
// ==========================================

const optimizeWorkout = async ({
  onboarding,
  workoutTemplate,
}) => {
  if (!onboarding) {
    throw new Error(
      "Onboarding data is required."
    );
  }

  if (!workoutTemplate) {
    throw new Error(
      "Workout template is required."
    );
  }

  const systemPrompt = `
You are FitAI Coach.

You are an expert fitness trainer.

Always return ONLY valid JSON.

Never use markdown.

Never explain your answer.

Return exactly the requested JSON.
`;

  const userPrompt =
    getWorkoutPrompt({
      onboarding,
      workoutTemplate,
    });

  const aiResponse =
    await generateAIResponse({
      systemPrompt,
      userPrompt,
      temperature: 0.4,
    });

  return parseAIResponse(
    aiResponse
  );
};

module.exports = {
  optimizeWorkout,
};