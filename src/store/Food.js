import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"
let api_endpoint = process.env.VUE_APP_PROJECT_CAFE_ENDPOINT || "http://localhost:1337"
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    data: [],
  },

  getters: {
    food: (state) => state.data,

  },

  mutations: {
    fetch(state, res) {
      state.data = res.data
    }
  },

  actions: {
    async fetchFood({ commit }) {
      let res = await Axios.get(api_endpoint + "/foods")
      commit("fetch", res)
    }
  },
  modules: {},
})