<template>
  <div>
    <b-card>
      <p class="tweet">{{content['text']}}</p>
      <div v-if="content['media_type'] === 'photo'" >
        <div v-for="n in content['photo_num']" :key="n">
          <img :src="content['media_src'][n + 1]" width="300px" class="media-border">
        </div>
      </div>
      <div v-if="content['media_type'] === 'video'" >
        <video :src="content['media_src'][1]" controls width="300px" class="media-border"></video>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TweetDetail',
  props: {
    content: {

    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'getTweets'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (min-width:768px) {
  .tweet{
    font-size: 30px;
    font-weight: bold;
  }
}
.media-border {
  border: dashed lightgray 4px;
}

</style>
