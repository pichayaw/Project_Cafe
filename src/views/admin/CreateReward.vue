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
        if ( AuthUser.getters.id !== 2) {
            console.log("deep",AuthUser.getters.user.username)
            this.$swal("Restricted Area", `You have no permission, You aren't admin` , " warning")
            this.$router.push("/")
        }        
    }
}
</script>

<style>

</style>