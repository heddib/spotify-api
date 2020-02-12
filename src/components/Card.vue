<template>
  <div class="card">
    <div class="overlayer">
      <a :href="url" target="_blank"><font-awesome-icon icon="play-circle" class="play" /></a>
    </div>
    <img
      :src="img"
      :alt="title"
    />
    <div class="title">
      <p>{{ title }} - {{ artist }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    img: String,
    url: String,
    title: String,
    artist: String
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

.overlayer .play {
  color: #fff;
  font-size: 73px;
  margin-top: 53px;
  transition: 100ms ease-in-out;
}

.play:hover {
  transform: scale(1.1);
}
</style>
