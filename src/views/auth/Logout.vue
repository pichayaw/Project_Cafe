<template>
  <div>

  </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
export default {
    mounted(){
        AuthUser.dispatch('logout')
        this.$swal("Logout","", "success");
        this.$router.push("/")
    }
}
</script>

<style>

</style>