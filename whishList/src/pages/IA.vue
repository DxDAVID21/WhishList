<script setup>
import { ref } from "vue";

const message = ref("");
const response = ref("");
const loading = ref(false);

async function askAI(msg) {
  try {
    const res = await fetch("http://localhost:3001/api/ai", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({prompt: msg}),
    });

    const data = await res.json();
    return data.text;
  } catch (err) {
    return "Error al comunicar amb la IA";
  }
}

async function send() {
  if (!message.value.trim()) return;
  loading.value = true;
  response.value = await askAI(message.value);
  loading.value = false;
}
</script>

<template>
  <div class="bg-neutral-900 p-6 rounded-2xl max-w-xl mx-auto shadow-xl text-white">
    <h2 class="text-2xl font-bold mb-4">🤖 Assistència IA</h2>

    <input 
      v-model="message" 
      @keyup.enter="send"
      placeholder="Pregunta un anime segons els teus gustos..."
      class="w-full p-3 rounded-lg bg-neutral-800 text-white"
    />

    <button 
      @click="send"
      class="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg"
    >
      Enviar
    </button>

    <p v-if="loading" class="mt-4 text-indigo-400">Pensant...</p>
    <p v-if="response" class="mt-4 text-gray-300 whitespace-pre-line">{{ response }}</p>
  </div>
</template>
