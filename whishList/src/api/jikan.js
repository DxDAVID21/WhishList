import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  headers: { "Content-Type": "application/json" },
});


export const jikan = {
  search(query, page = 1, limit = 20) {
    return api.get(`/anime`, {
      params: { q: query, page, limit},
    });
  },
  anime(id) {
    return api.get(`/anime/${id}`);
  },
  characters(id) {
    return api.get(`/anime/${id}/characters`);
  },
  staff(id) {
    return api.get(`/anime/${id}/staff`);
  },
  recommendations(id) {
    return api.get(`/anime/${id}/recommendations`);
  },
  topAnime(page = 1) {
    return api.get(`/top/anime`, {
      params: { page },
    });
  }
};
/*
const BASE = "https://api.jikan.moe/v4";

export const jikan = {
  search(query) {
    return fetch(`${BASE}/anime?q=${query}&order_by=popularity`).then(res => res.json());
  },
  anime(id) {
    return fetch(`${BASE}/anime/${id}/full`).then(res => res.json());
  }, 
  top(type = "anime") {
    return fetch(`${BASE}/top/${type}`).then(res => res.json());
  },
  characters(id) {
    return fetch(`${BASE}/anime/${id}/characters`).then(res => res.json());
  }
}
*/