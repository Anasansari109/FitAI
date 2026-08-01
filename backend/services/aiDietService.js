const {
  generateAIResponse,
} = require("./openAIService");

const {
  getDietPrompt,
} = require("../prompts/dietPrompt");

const {
  parseAIResponse,
} = require("../utils/parseAIResponse");

// ==========================================
// AI Diet Optimizer
// ==========================================

const optimizeDiet = async ({
  onboarding,
  dietTemplate,
}) => {
  if (!onboarding) {
    throw new Error(
      "Onboarding data is required."
    );
  }

  if (!dietTemplate) {
    throw new Error(
      "Diet template is required."
    );
  }

  const systemPrompt = `
You are FitAI Coach.

You are an expert sports nutritionist.

Always return ONLY valid JSON.

Never use markdown.

Never explain your answer.

Return exactly the requested JSON.
`;

  const userPrompt =
    getDietPrompt({
      onboarding,
      dietTemplate,
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
  optimizeDiet,
};