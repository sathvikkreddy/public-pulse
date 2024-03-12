import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAeBfyhaoLefbj2i-yqW7O-bDFYI0c1RU4");

export default async function getGeminiResponse(reviewsArr) {
  // For text-only input, use the gemini-pro model

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    safetySettings,
  });

  const stringifiedArr = JSON.stringify(reviewsArr);

  const prompt = `These are reviews in an array format: ${stringifiedArr}
  You need to analyze these reviews and respond with JSON of type 
    {
        topPositiveReviews: [] (max 3 reviews),
        topNegativeReviews: [] (max 3 reviews),
        keywords: [] (max 5 keywords, include both positive and negative keywords),
        rating: number (0 - 5),
        verdict: string (3 - 5 sentences)
    }
    the response should not have any heading and should be enclosed in {}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  //   console.log(text);
  return text;
}
