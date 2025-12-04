import { defineStore } from "pinia";

export const useWatchlistStore = defineStore("watchlistStore", {
  state: () => ({
    watchlist: JSON.parse(localStorage.getItem("watchlist")) || {
      watching: [],
      completed: [],
      planned: [],
    },
  }),

  actions: {  
    addTo(status, anime) {
      const list = this.watchlist[status];
      if (!list.some(a => a.mal_id === anime.mal_id)) {
        list.push(anime);
        this.save();
      }
    },

    removeFrom(status, id) {
      this.watchlist[status] = this.watchlist[status].filter(
        (a) => a.mal_id !== id
      );
      this.save();
    },

    save() {
      localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
    },
  },
});