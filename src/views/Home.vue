<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="30%" height="30%">
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
