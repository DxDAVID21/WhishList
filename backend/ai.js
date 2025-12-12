const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const googleGenAI = require("@google/genai"); 
const GoogleGenAI = googleGenAI.GoogleGenAI; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

// No posar a producció
console.log("API KEY:", process.env.GEMINI_API_KEY);

// Prova dels Mètodes de la IA
console.log("Mètodos de 'ai':", Object.keys(ai));


// --- Ruta Principal ---
app.post("/api/ai", async (req, res) => {
  try {
    const {prompt} = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: prompt,
    });

    res.json({text: response.text});
  } catch (err) {
    console.error(err);
    res.status(500).json({error: "Error al generar IA"});
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))