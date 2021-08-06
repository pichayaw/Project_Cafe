<template>
  <div>
      <h1>this is page history user</h1>
      <div>
          {{user.money}}
      </div>
      
  </div>
  
</template>

<script>
import AuthUser from '@/store/AuthUser'
export default {
    data() 
    {
        return {
            user : [] ,
            
        }
    },
    async created()
    {
        this.user = await AuthUser.getters.user
        
    },
}
</script>

<style>

</style>