import Vue from 'vue'
import Vuex from 'vuex'
import firebaseApp from './../../firebase_setup'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

const db = firebaseApp.database()
const tweetsRef = db.ref('tweets')
const GET_TWEETS = 'GET_TWEETS'

const myplugins = store => {
  store.dispatch(GET_TWEETS)
}

const store = new Vuex.Store({
  state: {
    tweets: {}
  },
  mutations: {
    ...firebaseMutations
  },
  actions: {
    [GET_TWEETS]: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('tweets', tweetsRef, { wait: true })
    })
  },
  getters: {
    getTweets: state => Object.values(state.tweets)
  },
  plugins: [myplugins]
})

export default store
