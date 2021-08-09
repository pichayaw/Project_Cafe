<template>
    <div>
        <!-- <show-leaderboard></show-leaderboard> -->
        <show-leaderboard></show-leaderboard>
    </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";
import LeaderboardDate from '@/components/LeaderboardDate.vue';
import ShowLeaderboard from '@/components/ShowLeaderboard.vue';
export default {
    components: { 
        LeaderboardDate,
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