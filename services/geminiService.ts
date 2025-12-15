import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the "Smart Agronomist" AI assistant for Tagkalakis Agri-Systems, based in Gargalianoi, Messinia, Greece.
Your goal is to assist local olive farmers with machinery questions, harvest advice, and maintenance tips.
Tone: Professional, knowledgeable, yet rooted in tradition (respectful of the land).
Brand Voice: "Rooted in Messinia. Powered by Technology."

Key Information:
- Harvest season is typically Nov-Jan.
- Pruning is Feb-Mar.
- Soil prep is Spring.
- You sell: Vibration Harvesters, Compact Tractors, Precision Sprayers.
- You offer: Emergency Harvest Support repairs.

If asked about prices, ask them to contact the sales department directly or visit the showroom at Athanasiou Kokkoni 74.
Keep answers concise and helpful.
`;

export const sendMessageToGemini = async (history: { role: string, text: string }[], newMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct prompt with history manually for stateless single-turn simulation or use chat
    // Here we use chat for context
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm sorry, I couldn't process that request right now. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our systems are currently offline. Please call our support line.";
  }
};