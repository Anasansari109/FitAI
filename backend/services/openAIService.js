const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Fast & Stable Gemini Model
const DEFAULT_MODEL = "gemini-2.5-flash-lite";

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Generate AI Response
 */

const generateAIResponse = async ({
  systemPrompt,
  userPrompt,
  temperature = 0.4,
}) => {
  const prompt = `
${systemPrompt}

---------------------------------------

${userPrompt}
`;

  const MAX_RETRIES = 3;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: DEFAULT_MODEL,
        contents: prompt,
        config: {
          temperature,
        },
      });

      return response.text;
    } catch (error) {
      console.error(
        `Gemini Attempt ${attempt} Failed:`,
        error.message || error
      );

      // Retry only for temporary Gemini errors
      if (
        (error.status === 503 || error.status === 500) &&
        attempt < MAX_RETRIES
      ) {
        console.log(`Retrying in ${attempt * 2} seconds...`);
        await sleep(attempt * 2000);
        continue;
      }

      throw new Error(
        "AI service temporarily unavailable. Please try again."
      );
    }
  }
};

module.exports = {
  generateAIResponse,
};






// const OpenAI = require("openai");

// // ==========================================
// // OpenAI Client
// // ==========================================

// if (!process.env.OPENAI_API_KEY) {
//   throw new Error(
//     "OPENAI_API_KEY is missing in .env"
//   );
// }

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // ==========================================
// // Configuration
// // ==========================================

// const DEFAULT_MODEL =
//   process.env.OPENAI_MODEL ||
//   "gpt-4.1-mini";

// // ==========================================
// // Generate AI Response
// // ==========================================

// const generateAIResponse = async ({
//   systemPrompt,
//   userPrompt,
//   temperature = 0.4,
// }) => {
//   try {
//     const response =
//       await client.responses.create({
//         model: DEFAULT_MODEL,

//         temperature,

//         input: [
//           {
//             role: "system",
//             content: systemPrompt,
//           },
//           {
//             role: "user",
//             content: userPrompt,
//           },
//         ],
//       });

//     if (!response.output_text) {
//       throw new Error(
//         "Empty AI response."
//       );
//     }

//     return response.output_text.trim();
//   } catch (error) {
//     console.error(
//       "\n========== OPENAI ERROR =========="
//     );

//     console.error(error);

//     console.error(
//       "=================================\n"
//     );

//     throw new Error(
//       "Unable to generate AI response."
//     );
//   }
// };

// module.exports = {
//   generateAIResponse,
// };