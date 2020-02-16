<template>
  <div class="cards">
    <Card v-for="card in cards" :key="card.title" :title="card.title" :img="card.img" :url="card.url" />
  </div>
</template>

<script>
import Card from './Card'
import store from '../../store'

export default {
  name: 'Cards',
  components: {
    Card
  },
  computed: {
    cards: function () {
      return (store.getters.getFavorites)
    }
  },
  mounted () {
    this.generateCards()
  },
  methods: {
    generateCards: function () {
      this.cards = [...store.getters.getFavorites]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>
