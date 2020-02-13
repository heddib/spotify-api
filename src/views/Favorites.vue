<template>
  <div class="home">
    <h1>Favoris</h1>
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Favorites/Cards.vue'

export default {
  name: 'Favorites',
  components: {
    Cards
  }
}
</script>
