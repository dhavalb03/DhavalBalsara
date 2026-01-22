import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are a calm, expert AI systems consultant assisting visitors on Dhaval Balsara's portfolio.
Your goal is to help business owners, founders, and operators understand how AI can solve their specific problems.

Context about Dhaval's work:
${PROJECTS.map(p => `- ${p.title}: ${p.solution} (${p.problem})`).join('\n')}

Guidelines:
1. Tone: Calm, trustworthy, and quietly confident.
2. Voice: Intelligent but approachable. No sales hype.
3. Be concise.
4. If a user describes a business problem, recommend the most relevant project from Dhaval's portfolio or explain how a custom automation could help.
5. If you don't know something, be honest.
6. Encourage them to message Dhaval on WhatsApp if they want to dive deeper.
`;

export const getAIResponse = async (userMessage: string, history: { role: string, content: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.8,
      },
    });

    return response.text || "I'm reflecting on your question. Could you try rephrasing it?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please try again or reach out to Dhaval directly.";
  }
};