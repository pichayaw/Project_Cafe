<template>
    <div>
        <!-- <show-leaderboard></show-leaderboard> -->
        <show-leaderboardd></show-leaderboardd>
    </div>
</template>

<script>
// import ShowLeaderboard from '@/components/ShowLeaderboard'
import AuthUser from "@/store/AuthUser";
import LeaderboardDate from '@/components/LeaderboardDate.vue';
import ShowLeaderboardd from '@/components/ShowLeaderboardd.vue';
export default {
    components: { 
        // ShowLeaderboard,
        LeaderboardDate,
        ShowLeaderboardd
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