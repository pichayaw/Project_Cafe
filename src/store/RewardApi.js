import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import AuthService from '@/services/AuthService'

let api_endpoint = process.env.VUE_APP_PROJECT_CAFE_ENDPOINT || "http://localhost:1337"

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
        
        async fetchReward ({ commit }) {
            let url = `${api_endpoint}/rewards`
            let headers = AuthService.getApiHeader()
            let res = await Axios.get(url, headers)
            commit('fetch', { res })
        },

        async addReward({ commit }, payload) {
            
            let url = `${api_endpoint}/rewards`

            let body = {
                menu: payload.menu,
                diamonds: payload.diamonds,
                Stock: payload.Stock
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
            

            let url = `${api_endpoint}/rewards/${payload.id}` 
            let body = {
                menu: payload.menu,
                diamonds: payload.diamonds,
                Stock: payload.Stock
            }
            
            
            try {
                let headers = AuthService.getApiHeader()
                let res = await Axios.put(url, body, headers)

                if (res.status === 200 && payload.diamonds >= 0 ) { //&& payload.diamonds >= 0
                    
                      commit("edit", payload.index, res.data)
                      return {
                          success: true,
                          data: res.data
                        }
                    }
                    
                else {
                      return {
                        success: false,
                        message: "Diamonds can???t be less than 0 point."
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
                        message: "Diamonds or Stocks can???t be less than 0 point." //+ e.response.data
                      }
                  }
            }
            
        },

        async deleteReward({ commit }, payload) {
            
            
            let url = `${api_endpoint}/rewards/${payload.id}` 

             try {
                let headers = AuthService.getApiHeader()
                let res = await Axios.delete(url, headers)

                if (res.status === 200) {
                    
                    commit("edit", payload.index, res.data)
                    return {
                        success: true,
                        data: res.data
                        }
                    }   
                  else {
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

        }



    },
    

    modules: {},
})