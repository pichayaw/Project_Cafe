<template>
    <div>
        <h1>ADMIN REWARDS</h1>
        <router-link v-if="isAuthen()" to="/admin/create">ADD NEW REWARD</router-link>
        <reward-table-admin></reward-table-admin>
        
    </div>
</template>

<script>
import RewardTableAdmin from '@/components/RewardTableAdmin.vue'
import AuthUser from "@/store/AuthUser"
export default {
    components: { 
        RewardTableAdmin 
        },
      methods: {
            isAuthen() {
                return AuthUser.getters.isAuthen
            }
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