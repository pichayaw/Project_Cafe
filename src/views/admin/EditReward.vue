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
            <label for="Stock">Stocks</label>
            <input v-model="form.Stock" type="number">
        <div>

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
                diamonds: '',
                Stock: ''
            }
        }
    },

    mounted() {
        if ( AuthUser.getters.id !== 2) {
            console.log("deep",AuthUser.getters.user.username)
            this.$swal("Restricted Area", `You have no permission, You aren't admin` , " warning")
            this.$router.push("/")
        }
        
    },

    async created() {
        this.id = this.$route.params.id
        let reward = await AdminService.getRewardById(this.id)
        console.log("reward",reward)
        this.form.menu = reward.menu
        this.form.diamonds = reward.diamonds
        this.form.Stock = reward.Stock
    },

    methods: {
        isAuthen() {
            return AuthUser.getters.isAuthen
        },

        async editReward() {
            let payload = {
                id: this.id,
                menu: this.form.menu,
                diamonds: this.form.diamonds,
                Stock: this.form.Stock
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
            
            if (this.form.diamonds >= 0 || this.form.Stock >= 0) {
                this.$router.push('/admin/rewards')
            }
            else {
                this.$swal("Edit Failed", `Cannot edit Diamonds or Stocks less than 0 , Diamonds : ${this.form.diamonds} & Stocks : ${this.form.Stock} `, "error")
                
            }
            
        },

        async deleteReward() {
            let payload = {
                id: this.id,
                menu: this.form.menu,
                diamonds: this.form.diamonds,
                Stock: this.form.Stock
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