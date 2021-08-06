<template>
    <div>
        <show-admin-rewards></show-admin-rewards>
    </div>
</template>

<script>
import ShowAdminRewards from '@/components/ShowAdminRewards'
import AuthUser from "@/store/AuthUser";

export default {
    components: { 
        ShowAdminRewards 
    },
    created() {
        console.log("user",AuthUser.getters.id)
    },
    
    mounted() {
        if ( AuthUser.getters.id !== 2) {
            console.log("deep",AuthUser.getters.user.username)
            this.$swal("Restricted Area", `You have no permission, You are customer (${AuthUser.getters.user.username})` , " warning")
            this.$router.push("/rewards")
        }
        
    }

}
</script>

<style>

</style>