import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export interface AnalysisResult {
  prediction: string;
  reasoning: string;
  confidence: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}

export const analyzeMatch = async (matchDetails: string): Promise<AnalysisResult | null> => {
  const ai = getAiClient();
  if (!ai) return null;

  const prompt = `
    You are Raphael Melese's digital assistant. Raphael is an expert sports betting analyst known for high-precision predictions.
    Analyze the following sports match details provided by a user: "${matchDetails}".
    
    Provide a prediction in JSON format with the following schema:
    {
      "prediction": "Short summary of the predicted outcome (e.g., Team A Win)",
      "reasoning": "A concise paragraph explaining the tactical reasons based on general sports knowledge.",
      "confidence": number (0-100),
      "riskLevel": "Low" | "Medium" | "High"
    }
    
    Do not use markdown formatting in the response, just the raw JSON string.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as AnalysisResult;
  } catch (error) {
    console.error("Error analyzing match:", error);
    return null;
  }
};

export const askMedicalQuestion = async (question: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "AI Service Unavailable";

  const prompt = `
    You are Raphael Melese, a 5th-year medical student at Haramaya University.
    Answer the following question: "${question}".
    
    Tone: Professional, empathetic, educational, but humble (student level).
    
    IMPORTANT DISCLAIMER: You must start or end the response with: 
    "Disclaimer: I am a medical student, not a licensed doctor yet. This is for informational purposes only and does not constitute medical advice."
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Error asking medical question:", error);
    return "I apologize, but I cannot answer that right now.";
  }
};