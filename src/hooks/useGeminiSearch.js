import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../utils/constants";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const getGeminiMovies = async (query) => {
    try {
      
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
You are a movie recommendation system.

Rules:
- Return ONLY movie names
- Use real, popular movies available on TMDB
- No numbering, no explanations
- Return exactly 10 movie names
- Separate each movie with a comma

User query: "${query}"
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

      const movieNames = text.split(",").map((m) => m.trim()); // return array of movie names
      
        return movieNames;
      
      
      
  } catch (error) {
    console.error("Gemini error:", error);
    return [];
  }
};
