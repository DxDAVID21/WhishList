import { ref } from "vue";
import { jikan } from "@/api/jikan.js";

export function useSearch() {
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const searchAnime = async (query) => {
    try{
      loading.value = true;
      error.value = null;
      const res = await jikan.search(query);
      results.value = res.data.data || [];
    } catch (err) {
      console.error(err);
      error.value = "Error fetching data";
    } finally {
      loading.value = false;
    }
  };

  return { results, loading, error, searchAnime};
}