<template>
  <div class="cards">
    <Card v-for="card in cards" :key="card.title" :title="card.title" :img="card.img" />
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Cards',
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
      console.log('Token : ' + this.token)
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
      myHeaders.append(
        'Authorization',
        'Bearer ' + this.token
      )
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      }

      fetch(
        'https://api.spotify.com/v1/browse/new-releases?country=fr&limit=24',
        requestOptions
      )
        .then(response => response.text())
        // .then(response => console.log(response))
        .then(result => this.generateUICards(result))
        .catch(error => console.log('error', error))
    },
    generateUICards: function (result) {
      result = JSON.parse(result).albums.items
      console.log(result)
      for (const item in result) {
        const album = result[item]
        console.log(album.name)
        console.log(album.images['0'].url)
        this.cards.push({ title: album.name, img: album.images['0'].url })
      }
    }
  },
  data: function () {
    return {
      token: '',
      response: '',
      cards: []
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
