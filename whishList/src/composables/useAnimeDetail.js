import {ref} from "vue";
import {jikan} from "@/api/jikan.js";


export function useAnimeDetail() {
  const anime = ref(null);
  const characters = ref([]);
  const staff = ref([]);
  const recommendations = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchAnime = async (id) => {
    try {
      loading.value = true;
      error.value = null;

      const [animeRes, charRes, staffRes, recRes] = await Promise.all([
        jikan.anime(id),
        jikan.characters(id),
        jikan.staff(id),
        jikan.recommendations(id),
      ]);

      anime.value = animeRes.data.data;
      characters.value = charRes.data.data;
      staff.value = staffRes.data.data;
      recommendations.value = recRes.data.data;
      
    } catch (err) {
      error.value = "Error fetching anime details";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };
  return { anime, characters, staff, recommendations, loading, error, fetchAnime };
}