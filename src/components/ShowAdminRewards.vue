<template>
    <div class="adminrewards">
        <div class="head">
        <h1><br>Rewards</h1><br>
        </div>
        <router-link v-if="isAuthen()" to="/admin/create">
        <b-button pill variant="outline-secondary" size="lg">ADD NEW REWARD
        </b-button>
        </router-link>
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
            console.log("User name ",AuthUser.getters.user.username)
            this.$swal("Restricted Area", `You have no permission, You are customer (${AuthUser.getters.user.username})`,"warning")
            this.$router.push("/rewards")
        }
        
    }

}
</script>

<style lang="scss" scoped>
.adminrewards{
    color: #737f8b ;
    .head{
        border: solid#BCAAA4;
        height: 170px;
        background-color:#BCAAA4;
        color: white;
        margin-bottom: 40px;
        h1{
        font-weight: bold;
        font-size: 3em;
        text-shadow: 5px 5px rgb(124, 116, 107);
        letter-spacing: 3px;
        font-variant: small-caps;
        
    }
    }    
}
</style>