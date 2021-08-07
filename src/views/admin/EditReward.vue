<template>
    <div>
        <h1>Edit Reward</h1>

        <div>
            <label for="menu">Menu</label>
            <input v-model="form.menu" type="text">
        </div>

        <div>
            <label for="diamonds">Diamonds</label>
            <input v-model="form.diamonds" type="number">
        </div>

        <div>
            <button @click="editReward">Update</button>
            <button @click="exit">Exit</button>
        </div>

        <div>
            <button @click="deleteReward">DELETE</button>
        </div>


    </div>
</template>

<script>
import RewardApiStore from '@/store/RewardApi' 
import AdminService from '@/services/AdminService'
import AuthUser from "@/store/AuthUser"

export default {
    data() {
        return {
            id: '',
            form: {
                menu: '',
                diamonds: ''
            }
        }
    },

    async created() {
        this.id = this.$route.params.id
        let reward = await AdminService.getRewardById(this.id)
        console.log("reward",reward)
        this.form.menu = reward.menu
        this.form.diamonds = reward.diamonds
    },

    methods: {
        isAuthen() {
            return AuthUser.getters.isAuthen
        },

        async editReward() {
            let payload = {
                id: this.id,
                menu: this.form.menu,
                diamonds: this.form.diamonds
            }

            console.log(payload)
            let res = await RewardApiStore.dispatch("editReward", payload)
            console.log(res)
            if (res.success) {
                this.$router.push("/admin/rewards")
            }
            else {
                this.$swal("Edit Failed", res.message, "error")
            }
        },

        exit() {
            console.log("diamonds form : ", this.form.diamonds)
            
            if (this.form.diamonds > 0) {
                this.$router.push('/admin/rewards')
            }
            else {
                this.$swal("Edit Failed", `Cannot edit Diamonds less than 0 , Diamonds (${this.form.diamonds})`, "error")
                
            }
            
        },

        async deleteReward() {
            let payload = {
                id: this.id,
                menu: this.form.menu,
                diamonds: this.form.diamonds
            }

            console.log("TEST",payload)
            let res = await RewardApiStore.dispatch("deleteReward", payload)
            console.log(res)
            if (res.success) {
                this.$router.push("/admin/rewards")
            }
            else {
                this.$swal("Delete Failed", res.message, "error")
            }
        },



    }


}
</script>

<style>

</style>