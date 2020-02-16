<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <input
          class="search"
          type="text"
          placeholder="Rechercher ..."
          v-model="query"
          v-on:input="generateCards"
        />
      </div>
    </div>
    <div class="cards">
      <Card v-for="card in cards" :key="card.title" :title="card.title" :img="card.img" :url="card.url" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Search',

  components: {
    Card
  },

  mounted () {
    const username = '2e25c7abe3504abca16fb3e6a1a116f6'
    const password = '06c2be880e114a49ab97dc8bb8669bdc'

    const b64 = Buffer.from(`${username}:${password}`, 'utf8').toString(
      'base64'
    )

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
    myHeaders.append('Authorization', 'Basic ' + b64)

    var urlencoded = new URLSearchParams()
    urlencoded.append('grant_type', 'client_credentials')

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    }

    fetch('https://accounts.spotify.com/api/token', requestOptions)
      .then(response => response.text())
      .then(result => (this.token = JSON.parse(result).access_token))
      .then(() => this.generateCards())
      .catch(error => console.log('error', error))
  },
  methods: {
    generateCards: function () {
      this.cards = []
      if (this.query === '') {
        return
      }
      console.log('Token : ' + this.token)
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
      myHeaders.append('Authorization', 'Bearer ' + this.token)
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      }

      fetch(
        `https://api.spotify.com/v1/search?q=${this.query}&type=track&market=FR&limit=10&offset=1`,
        requestOptions
      )
        .then(response => response.text())
        // .then(response => console.log(response))
        .then(result => this.generateUICards(result))
        .catch(error => console.log('error', error))
    },
    generateUICards: function (result) {
      result = JSON.parse(result).tracks.items
      console.log(result)
      for (const item in result) {
        const album = result[item].album
        console.log(album.name)
        console.log(album.images['0'].url)
        console.log(album.external_urls.spotify)
        this.cards.push({ title: album.name, img: album.images['0'].url, url: album.external_urls.spotify })
      }
    }
  },
  data: function () {
    return {
      query: '',
      cards: []
    }
  }
}
</script>

<style>
.search {
  background-color: #ffffff;
  padding: 10px;
  margin: 0 400px;
  border-radius: 18px;
  border: none;
  color: black;
}

::placeholder {
  color: rgb(139, 139, 139);
}

.central-box {
  margin: 0 100px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
</style>
