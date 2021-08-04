<template>
  <div>
    <h1>Log in</h1>
    <form @submit.prevent="login">
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

      <div>
        <button type="submit">Login</button>
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

<style></style>
