import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

interface QuestionAnswer {
  question: string;
  answer: string;
}

export const evaluateAnswers = async (qa: QuestionAnswer[]) => {
  const prompt = `
You are an interviewer bot. Evaluate the following candidate answers for a Full Stack (React/Node) role.
- Give each answer a score from 0 to 10.
- After all answers, provide a short summary of the candidate.
- Return a JSON object: { "scores": [..], "finalScore": 0-10, "summary": "..." }
  
Questions and Answers:
${qa.map((q, i) => `${i + 1}. Q: ${q.question}\nA: ${q.answer}`).join("\n")}
`;

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  const text = response.data.choices[0].message?.content || "";
  try {
    // Expect JSON in response
    return JSON.parse(text);
  } catch (error) {
    console.error("Error parsing AI response:", error);
    return { scores: [], finalScore: 0, summary: "AI evaluation failed" };
  }
};
