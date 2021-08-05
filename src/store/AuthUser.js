import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '@/services/AuthService'

Vue.use(Vuex)

let auth_key = 'auth_cafe'
let auth = JSON.parse(localStorage.getItem(auth_key))

const initialState = {
    user : auth ? auth.user:  "",
    jwt : auth ? auth.jwt:"",
    isAuthen: auth ? true : false
}

export default new Vuex.Store({
  state: initialState , 
  
  mutations: {
      loginSuccess(state , user , jwt)
      {
          state.user = user
          state.jwt = jwt
          state.isAuthen = true
      }, 
      logoutSuccess(state)
      {
        state.user = ""
        state.jwt = ""
        state.isAuthen = false
      }
  },
  actions: {
      async login ({commit} ,{ email , password})
      {
        let res = await AuthService.login({ email , password})
        if (res.success)
        {
            commit('loginSuccess' , res.user , res.jwt)
        }
        //console.log(res.message)
        return res
      },

      async logout({commit})
      {
          AuthService.logout()
          commit('logoutSuccess')
      }
  },
  modules: {
  },
  getters: {
    user : (state) => state.user,
    jwt : (state) => state.jwt,
    isAuthen : (state) => state.isAuthen,
    isAdmin : (state) => state.isAdmin
  }
})
