<template>
    <div>
        <reward-create-form></reward-create-form>
    </div>
</template>

<script>
import RewardCreateForm from '@/components/RewardCreateForm.vue'
import AuthUser from "@/store/AuthUser"
export default {
    components: { 
        RewardCreateForm 
    },

    mounted() {
        if (AuthUser.getters.user.username != "admin") {
            this.$swal("Restricted Area", `You have no permission, You are customer (${AuthUser.getters.user.username})` , " warning")
            this.$router.push("/")
        }
        
    }


}
</script>

<style>

</style>