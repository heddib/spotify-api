<template>
  <div class="card">
    <div class="overlayer">
      <font-awesome-icon @click="addToFavorites" :icon="this.addedToFavorites ? 'heart-broken' : 'heart'" class="fav" />
    </div>
    <img
      :src="img"
      :alt="title"
    />
    <div class="title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Card',
  computed: {
    addedToFavorites: function () {
      return (store.getters.getFavorite(this.title) != null)
    }
  },
  props: {
    img: String,
    title: String
  },
  methods: {
    addToFavorites: function () {
      if (!this.addedToFavorites) {
        store.commit('addFavorite', { title: this.title, img: this.img })
      } else {
        store.commit('removeFavorite', this.title)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 190px;
  height: 180px;
  margin: 15px;
  position: relative;
  min-width: 190px;
  background: #000;
}
.card:hover .overlayer {
  visibility: visible;
}
.card img {
  width: 100%;
  height: 100%;
}
.card .title {
  width: 100%;
  height: 30px;
  text-align: center;
  margin-top: 180px;
}

.card .title p {
  top: -175px;
  color: #fff;
  position: relative;
  font-size: 13px;
  text-decoration: none;
}

.card .overlayer {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  visibility: hidden;
}

.overlayer .fav {
  color: #fff;
  font-size: 73px;
  margin-top: 53px;
  transition: 100ms ease-in-out;
}

.fav:hover {
  transform: scale(1.1);
}
</style>
