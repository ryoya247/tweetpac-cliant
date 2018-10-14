<template>
  <div class="wrapper">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">ついーとぱっく</b-navbar-brand>
    </b-navbar>
    <b-container>
      <b-alert show class="alart">みんなが食べさせたツイート総数：{{this.getNum}}個</b-alert>
      <div v-for="(tweet, index) in this.getTweets.reverse()" :key="index">
        <div v-if="tweet != 'tweets'" v-for="(content, key) in tweet" :key="key">
          <TweetDetail :content="content"/>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TweetDetail from '@/components/TweetDetail.vue'

export default {
  name: 'MainComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TweetDetail
  },
  computed: {
    ...mapGetters([
      'getTweets'
    ]),
    getNum () {
      let sum = 0
      for (let i = 0; i < this.getTweets.length - 1; i++) {
        sum = sum + Object.keys(this.getTweets[i]).length
        console.log(sum)
      }
      return sum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width:768px) {
  .wrapper {
    max-width: 70%;
    margin: 0 auto;
  }
  .alart {
    font-size: 30px;
  }

}
.alart {
  margin: 20px 0;
}

</style>
