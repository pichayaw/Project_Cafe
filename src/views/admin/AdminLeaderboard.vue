<template>
    <div>
        <show-leaderboard></show-leaderboard>
    </div>
</template>

<script>
import ShowLeaderboard from '@/components/ShowLeaderboard'
import AuthUser from "@/store/AuthUser";
export default {
    components: { 
        ShowLeaderboard
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