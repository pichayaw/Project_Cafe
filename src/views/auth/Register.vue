<template>
    <div class="register">
        <div class="header">
            <h1><br>
            Create an Account
            </h1>
        </div>

        <div class="input" align=center>
            <b-card
            title="Enter your information"
            img-src="@/assets/register.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            >
            <b-card-text>
                <div class="user">
                <label for="username">Username</label>
                 <div>
                     &nbsp;<input v-model="form.username" type="text" autocomplete="off" placeholder="Username">
                </div>
            </div>
            <div class="email">
                <label for="email">Email</label>
                <div>
                &nbsp;<input v-model="form.email" type="text" autocomplete="off" placeholder="Email">
                </div>
            </div>
            <div class="pass">
                <label for="password">Password</label>
                <div>
                    &nbsp;<input v-model="form.password" type="password" placeholder="Password">
                </div>
            </div>
            <div class="pass">
                <label for="password">Confirm Password</label>
                <div>
                &nbsp;<input v-model="form.confirm " type="password" placeholder="Password">
                </div>
            </div>
            </b-card-text>

            <div class="submit">
                <b-button variant="primary" type="submit" @click="register">Register</b-button>
            </div>
        </b-card>
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
                confirm : ""
            }
            
        }
    },
    methods:{
        async register(){
            if(this.form.username === "" || this.form.email === "" || this.form.password === "" || this.form.confirm ==="")
            {
                this.$swal("Register Failed", "Infomation cannot be pmtry", "error")
            }
            else
            {
                if (this.form.confirm === this.form.password)
                {
                    let res = await AuthUser.dispatch('register', this.form)
                    if(res.success){
                        this.$swal("Register Success", `Welcome ${res.user.username}`,"success")
                        this.$router.push("/")
                    }else{
                        this.$swal("Register Failed", res.message, "error")
                    
                    }
                }
                else
                {
                    this.$swal("Register Failed", "please make sure password is match !!", "error")
                }
            }
            
            
        }
    }
}
</script>

<style lang="scss" scoped>

.register{
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../../assets/register1.jpg");
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
