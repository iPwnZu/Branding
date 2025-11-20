import { GoogleGenAI, Modality } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Uses Google Search Grounding to find recent info about a topic.
 * Model: gemini-2.5-flash
 */
export const searchTechTrends = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Find the latest, most cutting-edge trends in ${query} for 2025. Summarize 3 key trends briefly.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    // Extract URLs from grounding chunks
    const sources = chunks
      .map((chunk: any) => chunk.web)
      .filter((web: any) => web !== undefined);

    return { text, sources };
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};

/**
 * Uses Google Maps Grounding to provide location context (Hardcoded/Hero).
 * Model: gemini-2.5-flash
 */
export const getLocationDetails = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Where is Moravia, Czech Republic? Describe the region's tech scene and atmosphere briefly. Provide a map link.",
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    const text = response.text;
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const specificMapLinks = chunks
        .map((chunk: any) => ({ uri: chunk.web?.uri, title: chunk.web?.title }))
        .filter((item: any) => item.uri && item.uri.includes('google.com/maps'));

    return { text, maps: specificMapLinks };
  } catch (error) {
    console.error("Maps error:", error);
    throw error;
  }
};

/**
 * Uses Google Maps Grounding for dynamic user queries.
 * Model: gemini-2.5-flash
 */
export const findPlaces = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Find places related to: ${query}. List them with brief details.`,
      config: {
        tools: [{ googleMaps: {} }],
      },
    });

    const text = response.text;
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    // Extract Map Data specifically from grounding chunks
    const places = chunks
      .map((chunk: any) => {
         if (chunk.web && chunk.web.uri.includes('google.com/maps')) {
             return { title: chunk.web.title, uri: chunk.web.uri };
         }
         return null;
      })
      .filter((item: any) => item !== null);

    return { text, places };
  } catch (error) {
    console.error("Find Places error:", error);
    throw error;
  }
};

/**
 * Uses Thinking Mode for complex architectural queries.
 * Model: gemini-3-pro-preview
 */
export const askArchitect = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: question,
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
      },
    });
    return response.text;
  } catch (error) {
    console.error("Thinking error:", error);
    throw error;
  }
};

/**
 * Generates images using the specified aspect ratio.
 * Model: gemini-3-pro-image-preview
 */
export const generateCreativeImage = async (prompt: string, aspectRatio: string) => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-image-preview',
            contents: {
                parts: [{ text: prompt }],
            },
            config: {
                imageConfig: {
                    aspectRatio: aspectRatio,
                },
            },
        });

        let imageUrl = null;
        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                const base64EncodeString = part.inlineData.data;
                imageUrl = `data:image/png;base64,${base64EncodeString}`;
                break;
            }
        }
        return imageUrl;
    } catch (error) {
        console.error("Image Gen error:", error);
        throw error;
    }
};

/**
 * Generates speech from text.
 * Model: gemini-2.5-flash-preview-tts
 */
export const generateSpeech = async (text: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text: text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' }, // Voices: Puck, Charon, Kore, Fenrir, Zephyr
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) throw new Error("No audio data received");
        
        return `data:audio/wav;base64,${base64Audio}`;
    } catch (error) {
        console.error("TTS error:", error);
        throw error;
    }
};
