import { ref } from "vue";
import * as googleGenAIModule from "@google/genai"; 

const GoogleGenAI = googleGenAIModule.GoogleGenAI || googleGenAIModule.default.GoogleGenAI;

let genAI;

try {
  genAI = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_KEY});
} catch (e) {
  console.error("Error al instancias GoogleGenAI:", e);
  genAI = {};
}



export const useGemini = () => {

  const history = ref([]); 
  const isGenerating = ref(false);
  const error = ref(null);

  /**
  * Envía un nuevo mensaje al modelo Gemini y actualiza el historial.
  * @param {string} newMessage - El mensaje del usuario.
  */
  const sendMessage = async (newMessage) => {
    const userMessage = newMessage.trim();
    if (!userMessage || isGenerating.value) return;

    isGenerating.value = true;
    error.value = null;

    history.value.push({ role: 'user', content: userMessage, loading: false });

    const aiMessageIndex = history.value.length;
    history.value.push({ role: 'ai', content: '', loading: true });

    try {
      const contents = history.value
        .filter(msg => msg.content)
        .map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }));
            
        const generateFunction = genAI.models?.generateContent ||genAI.generateContent;
        if (typeof generateFunction !== 'function') {
          throw new Error("La funcio de generacion de contenido(generateCointent) no está disponible en la instancia de la Ia.")
        }

        const result = await genAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: contents,
        });

        const aiResponseText = result.text; 

        history.value[aiMessageIndex].content = aiResponseText;

    } catch (e) {
      console.error("Error Gemini:", e);
      history.value[aiMessageIndex].content = "La IA no está disponible o la clave API es incorrecta.";
      error.value = e.message;
    } finally {
      history.value[aiMessageIndex].loading = false;
      isGenerating.value = false;
    }
  };

  const getLastResponseText = () => {
    const lastAiMessage = history.value.slice().reverse().find(msg => msg.role === 'ai' && !msg.loading);
    return lastAiMessage ? lastAiMessage.content : '';
  };

  return { 
    history, 
    isGenerating, 
    error, 
    sendMessage, 
    getLastResponseText 
  };
};