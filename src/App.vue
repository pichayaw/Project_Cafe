<template>
  <div id="app">
    <div id="nav">
      <p> CS cafe</p>
      <router-link to="/">MENU</router-link> |
      <router-link to="/rewards">REWARDS</router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #737f8b;
}

#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  p{
    text-align: left;
    margin-right: 3rem;
  }
  padding: 30px;
  background-color: rgb(201, 231, 181);

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
