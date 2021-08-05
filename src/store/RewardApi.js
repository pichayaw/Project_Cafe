import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import AuthService from '@/services/AuthService'

let api_endpoint = process.env.VUE_APP_POKEMON_ENDPOINT || "http://localhost:1337"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {  
        data: [],
    },

    getters: {
        rewards: (state) => state.data,
    },

    mutations: {
        fetch(state, { res }) { 
            state.data = res.data
        },
        add(state,  payload ) {
            state.data.push(payload)
        },
        edit(state, index, data) {
          state.data[index] = data
        },
    },

    actions: {

        // addReward({ commit }, payload) {
        //     commit("add", {payload})
        // },
        
        async fetchReward ({ commit }) {
            // let url = `${api_endpoint}/rewards` 
            let res = await Axios.get(`${api_endpoint}/rewards`)
            //(api_endpoint + "/rewards") 

            commit('fetch', { res })
        }
    },

        async addReward({ commit }, payload) {
            console.log("payload",payload)
            let url = `${api_endpoint}/rewards`

            let body = {
                menu: payload.menu,
                diamonds: payload.diamonds
            }
            
            try {
                let headers = AuthService.getApiHeader()
                let res = await Axios.post(url, body, headers)
                if (res.status == 200) {
                    commit("add", res.data)
                    return {
                        success: true,
                        data: res.data
                      }
                }
                else {
                    console.error(res)
                    return {
                      success: false,
                      message: "Unknown status code: " + res.status
                    }
                  } 

            } catch (e) {
                if (e.response.state === 403) {
                    console.error(e.response.data.message)
                    return {
                      success: false,
                      message: e.response.data.message,
                    }
                  }
                  else {
                      return {
                        success: false,
                        message: "Unknown error:" + e.response.data
                      }
                  }
            }

        },

        async editReward({ commit }, payload) {
            //edit
        },


    modules: {},
})