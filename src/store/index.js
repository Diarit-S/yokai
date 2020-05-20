import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: []
  },

  // ----- getters -----
  getters: {
    articles: state => state.articles
  },

  // ----- actions -----
  actions: {
    async getArticles(context) {
      const members = await axios.get(
        'https://raw.githubusercontent.com/Diarit-S/json-test/master/articles.json'
      )
      context.commit('SET_MEMBERS', members.data)
    }
  },

  // ----- mutations -----
  mutations: {
    SET_MEMBERS(state, articles) {
      state.articles = articles
    }
  }
})
