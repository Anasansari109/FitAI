// ==========================================
// Parse AI JSON Response
// ==========================================

const parseAIResponse = (response) => {
  if (!response) {
    throw new Error(
      "Empty AI response."
    );
  }

  let cleanedResponse =
    response.trim();

  // Remove markdown blocks

  cleanedResponse =
    cleanedResponse.replace(
      /```json/gi,
      ""
    );

  cleanedResponse =
    cleanedResponse.replace(
      /```/g,
      ""
    );

  cleanedResponse =
    cleanedResponse.trim();

  // Extract JSON only

  const firstBrace =
    cleanedResponse.indexOf("{");

  const lastBrace =
    cleanedResponse.lastIndexOf("}");

  if (
    firstBrace !== -1 &&
    lastBrace !== -1
  ) {
    cleanedResponse =
      cleanedResponse.substring(
        firstBrace,
        lastBrace + 1
      );
  }

  try {
    return JSON.parse(
      cleanedResponse
    );
  } catch (error) {
    console.error(
      "\n====== AI JSON ERROR ======"
    );

    console.error(
      cleanedResponse
    );

    console.error(
      "===========================\n"
    );

    throw new Error(
      "AI returned invalid JSON."
    );
  }
};

module.exports = {
  parseAIResponse,
};