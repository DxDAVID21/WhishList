import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export async function searchAnime(query) {
  console.log("Searching for anime with:", query);

  const response = await api.get("/anime", {
    params: { q: query },
  });
  return response.data.data;
}

export async function getAnimeById(id) {
  const response = await api.get(`/anime/${id}`);
  return response.data.data;
}
