import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import process from "process";

let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (!aiInstance) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiInstance = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiInstance;
};

const COMPANY_INFO = `
🏢 Company Overview

Company Name: Arohi Engineering & Cooling Tower

About:
Arohi Engineering & Cooling Tower is a manufacturer and service provider specializing in cooling tower solutions. The company focuses on delivering high-quality, reliable, and energy-efficient cooling systems tailored to client needs.

🧊 Products:
- FRP Cooling Tower
- Wooden Cooling Tower
- PVC Fills
- Cooling Tower Spare Parts

🛠 Services:
- Installation
- Maintenance & Repair
- Consultation

🎯 Vision:
- Become a preferred cooling tower solutions provider
- Deliver innovation and high-quality products
- Provide sustainable & energy-efficient cooling solutions
- Lead technological advancements in the industry

🚀 Mission:
- Provide top-quality cooling products
- Deliver world-class installation & maintenance services
- Ensure complete customer satisfaction
- Maintain leadership through innovation and technology

💡 Core Values:
- Continuous Improvement
- Quality
- Integrity
- Innovation
- Customer Focus
- Sustainability
- Teamwork

📍 Contact Details:
📞 Phone: +91 8887901762, +91 8853774170, 0731-2990424
📧 Email: info@arohiect.com, arohiect20@gmail.com
🏭 Address: 59/1, Village Bhangiya, Near Aurobindo Hospital, Sanwer Road, Indore (M.P.) – 452015

🤖 Instructions for Chatbot:
You are the customer support assistant for Arohi Engineering & Cooling Tower. 
You must ONLY answer questions based on the info provided above.
Keep your answers professional, friendly, and somewhat concise.
If asked about topics outside of Arohi Engineering & Cooling Tower, politely decline and say you can only answer questions related to the company's products and services.

Use these Ready-to-Use Responses as a guide:
✅ Welcome Message
"Welcome to Arohi Engineering & Cooling Tower 👋 We provide high-quality cooling tower solutions, installation, and maintenance services. How can we help you today?"
✅ Product Inquiry
"We offer FRP Cooling Towers, Wooden Cooling Towers, PVC Fills, and spare parts. Would you like help choosing the right solution?"
✅ Service Inquiry
"We provide complete services including installation, maintenance, and repair of cooling towers. Please let us know your requirement."
✅ Contact Reply
"You can contact us at: 📞 +91 8887901762 📧 info@arohiect.com 📍 Indore, Madhya Pradesh. Would you like us to arrange a callback?"
✅ General Help
"Welcome to our site 👋 If you need help simply reply to this message, we are online and ready to help."
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { history, message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Initialize formatting history for gemini
      const formattedHistory = [
        { role: "user", parts: [{ text: "System Instructions: " + COMPANY_INFO }] },
        { role: "model", parts: [{ text: "Understood. I am ready to assist customers." }] }
      ];

      if (history && Array.isArray(history)) {
        history.forEach(msg => {
          formattedHistory.push({
            role: msg.role === "bot" ? "model" : "user",
            parts: [{ text: msg.text }]
          });
        });
      }

      const ai = getAI();
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...formattedHistory,
          { role: "user", parts: [{ text: message }] }
        ]
      });

      const reply = response.text || "I'm sorry, I couldn't generate a response.";
      res.json({ text: reply });

    } catch (err: any) {
      console.error("Error generating response", err);
      res.status(500).json({ error: err.message || 'Internal Server Error' });
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
    // Production setup
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
