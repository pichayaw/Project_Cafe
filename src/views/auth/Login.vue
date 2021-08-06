<template>
  <div class="login">
    <div class="header">
      <h1><br>
        Log In</h1>
    </div>
    <form @submit.prevent="login">
      <div class="input" align=center>
        <b-card
          title="Enter your information"
          img-src="@/assets/login.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
        <b-card-text>
          <div>
            <label for="email">email</label>
            <input
              v-model="from.email"
              type="text"
              placeholder="email"
              autocomplete="off"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              v-model="from.password"
              type="password"
              placeholder="password"
              autocomplete="off"
            />
          </div>
        </b-card-text>
          <div>
            <button type="submit">Login</button>
          </div>
        </b-card>
      </div>
    </form>
  </div>
</template>

<script>
//import AuthService from "@/services/AuthService";
import AuthUser from '@/store/AuthUser'
export default {
  data() {
    return {
      from: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      //let res = await AuthService.login(this.from);
      let res = await AuthUser.dispatch('login' , this.from)
      if (res.success) {
        this.$swal("Login success", `Welcome, ${res.user.username}`, "success");
        this.$router.push("/");
        
      } else {
        this.$swal("Login Failed", res.message, "error");
      }
    },
    
  },
};
</script>

<style lang="scss" scoped>

.login{
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../../assets/login1.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    color: #737f8b  
}

.header{
    h1{
        font-weight: bold;
        font-size: 3em;
        text-shadow: 5px 5px rgb(114, 98, 84);
    }
    color: white;
    letter-spacing: 3px;
    font-variant: small-caps;
}
.input{
    margin-top: 30px;
}
.user{
    border: 30px;
}
</style>
