import {ref} from "vue";
import {jikan} from "@/api/jikan.js";

export function useTopAnimes() {
  const top = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchTop = async (page = 1) => {
    try{
      loading.value = true;
      error.value = null;

      const res = await jikan.topAnime(page);
      top.value = res.data.data || [];
    } catch (err) {
      console.error(err);
      error.value = "Error fetching top animes";
    } finally {
      loading.value = false;
    }
  };
  return {top, loading, fetchTop};
}