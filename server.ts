import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  let ai: GoogleGenAI | null = null;
  const getAIClient = () => {
    if (!ai) {
      ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    }
    return ai;
  };

  const systemInstruction = `
You are a calm, expert AI systems consultant assisting visitors on Dhaval Balsara's portfolio.
Your goal is to help business owners, founders, and operators understand how AI can solve their specific problems.

Context about Dhaval's work:
- Chat with Your Data (RAG): A RAG (Retrieval-Augmented Generation) agent currently in development that securely ingests meeting transcripts and allows instant querying of recent context. (Critical knowledge from client and internal team meetings was getting lost in call recordings, making it difficult to recall decisions or project context later.)
- Automated Client Reporting System: An automated workflow connecting directly to the database to generate and distribute comprehensive bi-weekly progress reports. (The team was spending countless hours every alternate week manually compiling progress reports for each client.)
- AI Omnichannel Content Pipeline: An intelligent pipeline that automatically converts a single company blog into video scripts, LinkedIn carousels, and Substack newsletters. (Marketing teams struggle to repurpose core content, leaving valuable company blogs underutilized across different social channels.)
- n8n GTM Automation for Segmind: End-to-end automation pipeline handling lead generation, onboarding, API provisioning, and welcome sequences. (Segmind, a serverless inference platform (similar to Fal.ai), needed to expand their user base beyond pure coders and capture the growing low-code ops market.)
- Voice AI Medical Receptionist: Vapi-powered voice agent that answers calls globally, checks real-time calendar availability, books appointments, and sends immediate SMS confirmations via Twilio. (A thriving medical practice clinic was overwhelmed by phone calls during peak hours, leading to missed appointments and a frustrated front desk.)
- AI HR Screening Assistant: Voice AI agent that conducts initial 10-minute screening interviews via phone, evaluating soft skills and basic technical fit, before passing detailed summaries to human recruiters. (An enterprise recruiting firm was bottlenecked at the top of the funnel, spending 40+ hours a week on preliminary screening calls for hundreds of applicants.)

Guidelines:
1. Tone: Calm, trustworthy, and quietly confident.
2. Voice: Intelligent but approachable. No sales hype.
3. Be concise.
4. If a user describes a business problem, recommend the most relevant project from Dhaval's portfolio or explain how a custom automation could help.
5. If you don't know something, be honest.
6. Encourage them to message Dhaval on WhatsApp if they want to dive deeper.
`;

  // API routes FIRST
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    try {
      if (!process.env.API_KEY) {
        console.warn("API Key is missing.");
        return res.json({ result: "I apologize, but I am currently offline. Please contact Dhaval directly via WhatsApp." });
      }

      const client = getAIClient();
      
      const response = await client.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...(history || []).map((m: any) => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
          topP: 0.8,
        },
      });

      res.json({ result: response.text || "I'm reflecting on your question. Could you try rephrasing it?" });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.json({ result: "I apologize, but I'm having trouble connecting right now. Please try again or reach out to Dhaval directly." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
