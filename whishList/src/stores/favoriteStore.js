import {defineStore} from 'pinia';

export const useFavoriteStore = defineStore('favoriteStore', {
  state: () => ({
    favorites: [],
  }),
  actions: {  
    addFavorite(item) {
      if (!this.isFavorite(item.mal_id)) {
        this.favorites.push(item);
      }
    },
    removeFavorite(id) {
      this.favorites = this.favorites.filter(
        fav => fav.mal_id !== id
      );
    },
  },
  getters: {
    isFavorite: (state) => (id) => {
      return state.favorites.some(
        fav => fav.mal_id === id
      );
    }
  }
});

