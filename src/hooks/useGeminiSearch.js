import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const getGeminiMovies = async (query) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
You are a movie recommendation engine.

Return exactly 10 movie titles for this query: "${query}"

Rules:
- Do NOT use bullet points
- Do NOT number them
- Do NOT use quotes
- Do NOT use brackets
- Return only comma separated movie names
- Do NOT include any extra text"
`;

    const result = await model.generateContent(prompt);
    return result.response
      .text()
      .split(",")
      .map((m) => m.trim());
  } catch (error) {
    console.error("Gemini error:", error);
    return [];
  }
};
