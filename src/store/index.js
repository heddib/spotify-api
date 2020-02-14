import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    addFavorite (state, favorite) {
      state.favorites.push(favorite)
    },
    removeFavorite (state, title) {
      var removeIndex = state.favorites.map(function (favorite) { return favorite.title }).indexOf(title)
      state.favorites.splice(removeIndex, 1)
    }
  },
  getters: {
    getFavorite: (state) => (title) => {
      return state.favorites.find(favorite => favorite.title === title)
    },
    getFavorites: (state) => {
      return state.favorites
    }
  },
  actions: {
  },
  modules: {
  }
})
