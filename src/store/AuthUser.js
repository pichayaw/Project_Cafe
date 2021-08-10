import Vue from "vue"
import Vuex from "vuex"

import AuthService from "@/services/AuthService"

Vue.use(Vuex)


let auth_key = 'auth_cafe'
let auth = JSON.parse(localStorage.getItem(auth_key))
let api_endpoint = process.env.VUE_APP_PROJECT_CAFE_ENDPOINT || "http://localhost:1337"

export default new Vuex.Store({
  state: {
    user : auth ? AuthService.refresh() :  "",
    jwt : auth ? auth.jwt:"",
    isAuthen: auth ? true : false,
    id : auth ? auth.user.id : '',
    
  },
  
  mutations: {
      loginSuccess(state , res)
      {
          state.user = res.user
          state.jwt = res.jwt
          state.isAuthen = true
          state.id = res.user.id
      }, 
      logoutSuccess(state)
      {
        state.user = ""
        state.jwt = ""
        state.isAuthen = false
        state.id = 0
      } ,

    
      async update(state , user )
      {
        let res = await AuthService.refresh()
        state.user = res
        
      },

      async updateStock(state , user)
      {
        state.user = user.data
      },

     
  },
  actions: {
      async login ({commit} ,{ email , password})
      {
        let res = await AuthService.login({ email , password})
        
        let body = {
          user : res.user ,
          jwt: res.jwt
          }
          
          
        if (res.success)
        {
            commit('loginSuccess' , body)
        }
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

      async redeem({commit} ,item)
      {
          let res = await AuthService.redeem(item)
          if(res.status === "success")
          {
            commit('updateStock' , res.me)
            return res ;
          }  
          else
          {
            console.error(res.message)
          }
      },

      async buyHot({commit} , water)
      {
          let res = await AuthService.buyHot(water)
          if(res.status === "success")
          {
            commit('update' , res.me)
            return res ;
          }  
          else
          {
            console.error(res.message)
          }
      },

      async buyIce({commit} , water)
      {
          let res = await AuthService.buyIce(water)
          if(res.status === "success")
          {
            commit('update' , res.me)
            return res ;
          }  
          else
          {
            console.error(res.message)
          }
      },

      async buyBlended({commit} , water)
      {
          let res = await AuthService.buyBlended(water)
          if(res.status === "success")
          {
            commit('update' , res.me)
            return res ;
          }  
          else
          {
            console.error(res.message)
          }
      },

      async buyFood({commit} , kao)
      {
        let res = await AuthService.buyFood(kao)
        if(res.status === "success")
        {
          commit('update' , res.me)
          return res ;
        }  
        else
        {
          console.error(res.message)
        }
      },

      async register({ commit },{ username, email, password })
      {
        let res = await AuthService.register({ username, email, password})
        if(res.success){
            commit("loginSuccess", res)
        }
        return res
      }

      


  },
  modules: {
  },
  getters: {
    user : (state) => state.user,
    jwt : (state) => state.jwt,
    isAuthen : (state) => state.isAuthen,
    id : (state) => state.id
  }
})