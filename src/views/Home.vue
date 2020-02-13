<template>
  <div class="home">
    <img alt="Logo" src="../assets/logo.png" width="20%" height="20%">
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Cards
  }
}
</script>
