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
        this.$swal("Logout เสร็จสิ้น","", "success");
        this.$router.push("/")
    }
}
</script>

<style>

</style>