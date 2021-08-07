<template>
  <div id="app">
    <div id="nav">
      <p>
        <b-icon icon="cup-straw" animation="throb" font-scale="1.2"></b-icon>
        CS cafe
        <b-icon icon="cup" animation="throb" font-scale="1.2"></b-icon>
      </p>
      <router-link to="/">MENU</router-link>
      <h5>|</h5>
      <router-link v-if="isAuthen()" to="/shop" >SHOP</router-link>
      <h5 v-if="isAuthen()" >|</h5>
      <router-link to="/rewards" >REWARDS</router-link>
      <h5 v-if="isAuthen()" >|</h5>
      <router-link v-if="isAuthen() && isAdmin()" to="/admin/rewards" >ADMIN REWARDS</router-link>
      <h5 v-if="!isAuthen()" >|</h5>
      <router-link to="/rewards/register" v-if="!isAuthen()">REGISTER</router-link>
      <h5 v-if="!isAuthen()" >|</h5>
      <router-link to="/login" v-if="!isAuthen()">LOGIN</router-link>
      <h5 v-if="isAuthen()&& isAdmin()" >|</h5>
      <router-link to="/topup" v-if="isAuthen()">TOPUP</router-link>
      <h5 v-if="isAuthen()" >|</h5>
      <router-link to="/buyhistory" v-if="isAuthen()">HISTOLY</router-link>
      <h5 v-if="isAuthen()" >|</h5>
      <router-link to="/logout" v-if="isAuthen()">LOGOUT</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";
export default {
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
    isAdmin()
    {
      return AuthUser.getters.id === 2
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  h5 {
    color: white;
    margin: 0 2rem 0 2rem;
  }
}

#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  p {
    text-align: left;
    margin-right: 3rem;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
  }
  padding: 30px;
  background-color: rgb(158, 113, 77);

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #a9d1e0;
    }
  }
}
</style>
