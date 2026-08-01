const {
  generateAIResponse,
} = require("./openAIService");

const {
  getCoachPrompt,
} = require("../prompts/coachPrompt");

// ==========================================
// FitAI Coach
// ==========================================

const chatWithCoach = async ({
  onboarding,
  workoutPlan,
  dietPlan,
  message,
}) => {
  if (!message) {
    throw new Error(
      "Message is required."
    );
  }

  const systemPrompt = `
You are FitAI Coach.

You are an expert fitness coach.

Never say you are ChatGPT.

Never say you are OpenAI.

Answer naturally.
`;

  const userPrompt =
    getCoachPrompt({
      onboarding,
      workoutPlan,
      dietPlan,
      message,
    });

  const response =
    await generateAIResponse({
      systemPrompt,
      userPrompt,
      temperature: 0.7,
    });

  return response;
};

module.exports = {
  chatWithCoach,
};