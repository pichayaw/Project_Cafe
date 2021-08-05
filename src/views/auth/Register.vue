<template>
    <div>
        <h1>
            Register
        </h1>
        <form></form>
        <div>
            <label for="username">Username</label>
            <input v-model="form.username" type="text" autocomplete="off" placeholder="username">
        </div>
        <div>
            <label for="email">Email</label>
            <input v-model="form.email" type="text" autocomplete="off" placeholder="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input v-model="form.password" type="password">
        </div>
        <div>
            <button type="submit" @click="register">Register</button>
        </div>
    </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
export default {
    data(){
        return{
            form:{
                username: "",
                email: "",
                password: "",
            }
        }
    },
    methods:{
        async register(){
            console.log(1)
            let res = await AuthUser.dispatch('register', this.form)
            console.log(res)
            if(res.success){
                this.$swal("Register Success", `Welcome ${res.user.username}`,"success")
                this.$router.push("/")
            }else{
                this.$swal("Register Failed", res.message, "error")
               
            }
        }
    }
}
</script>

<style>

</style>