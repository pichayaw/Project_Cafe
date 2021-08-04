<template>
  <div>

  </div>
</template>

<script>
//import AuthService from '@/services/AuthService'
import AuthUser from '@/store/AuthUser'
export default {
    mounted(){
        AuthUser.dispatch('logout')
        this.$router.push("/")
    }
}
</script>

<style>

</style>