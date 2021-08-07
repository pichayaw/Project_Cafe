<template>
  <h1>this Shop page</h1>
</template>

<script>
import AuthUser from '@/store/AuthUser'
export default {
    data() 
    {
        return {
            user : "" ,
            money :null
        }
    },
    async created()
    {
        this.user = await AuthUser.getters.user
        console.log(this.user);
        
    },


    mounted()
    {
        if (!this.isAuthen()) {
            this.$swal("ห้ามเข้า", `ไป login ซะ`, "warning");
            this.$router.push("/");
        }
    },

    methods: {
        isAuthen()
        {
            return AuthUser.getters.isAuthen
        }

    }
}
</script>

<style>

</style>