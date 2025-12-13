import {defineStore} from 'pinia';

export const useAnimeStore = defineStore('anime', {
  state: () => ({
    lastQuery: '',
    lastResults: null,
  }),

  actions: {
    setQuery(query) {
      this.lastQuery = query;
    },
    setResults(results) {
      this.lastResults = results;
    },
    clearCache() {
      this.lastQuery = '';
      this.lastResults = null;
    }
  }
});