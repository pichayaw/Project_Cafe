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
        users: (state) => state.data,
    },

    mutations: {
        fetch(state, { res }) { 
            state.data = res.data
        },
        
    },

    actions: {  
        
        async fetchUser ({ commit }) {
            let url = `${api_endpoint}/users`
            let headers = AuthService.getApiHeader()
            let res = await Axios.get(url, headers)
            
            commit('fetch', { res })
        },

        



    },
    

    modules: {},
})