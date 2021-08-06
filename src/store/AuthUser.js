import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '@/services/AuthService'

Vue.use(Vuex)

let auth_key = 'auth_cafe'
let auth = JSON.parse(localStorage.getItem(auth_key))

// const initialState = {
//     user : auth ? auth.user:  "",
//     jwt : auth ? auth.jwt:"",
//     isAuthen: auth ? true : false
// }

export default new Vuex.Store({
  state: {
    user : auth ? AuthService.refresh() :  "",
    jwt : auth ? auth.jwt:"",
    isAuthen: auth ? true : false
  },
  
  mutations: {
      loginSuccess(state ,{user , jwt})
      {
          console.log(jwt);
          state.user = user
          state.jwt = jwt
          state.isAuthen = true
      }, 
      logoutSuccess(state)
      {
        state.user = ""
        state.jwt = ""
        state.isAuthen = false
      } ,

      async update(state , user )
      {
        console.log("this is update " , user);
        let res = await AuthService.refresh()
        console.log("this is res",res);
        state.user = res
       
      }
  },
  actions: {
      async login ({commit} ,{ email , password})
      {
        let res = await AuthService.login({ email , password})
        let body = {
          user : res.user ,
          jwt: res.jwt
          }
          console.log(body);
        if (res.success)
        {
            commit('loginSuccess' , body)
        }
        //console.log(res.message)
        return res
      },

      async logout({commit})
      {
          AuthService.logout()
          commit('logoutSuccess')
      },

      async topup({commit} , money)
      {
          let res = await AuthService.topup(money)
          console.log("this is topup" ,res);
          if(res.status === "success")
          {
            commit('update' , res.res)
            return res ;
          }  
          else
          {
            console.error(res.message)
          }
      },

      
      
  },
  modules: {
  },
  getters: {
    user : (state) => state.user,
    jwt : (state) => state.jwt,
    isAuthen : (state) => state.isAuthen
  }
})
