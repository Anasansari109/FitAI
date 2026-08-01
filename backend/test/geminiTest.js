require("dotenv").config();

const {
  generateAIResponse,
} = require("../services/openAIService");

const testGemini = async () => {
  try {
    console.log("Testing Gemini...\n");

    const response =
      await generateAIResponse({
        systemPrompt:
          "You are FitAI Coach.",

        userPrompt:
          "Say hello in one short sentence.",

        temperature: 0.2,
      });

    console.log("AI Response:\n");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

testGemini();