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
