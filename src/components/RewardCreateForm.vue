<template>
    <div>
        <br>
        <h2>Add New Reward</h2>
        
        <br>
        <!-- <form @submit.prevent="addReward"> type="submit"-->
        <div>
            <div>
                <label for="menu">Menu </label>
                <br>
                <input v-model="form.menu" type="text">
            </div>
            <br>
            <div>
                <label for="diamonds">Diamonds </label>
                <br>
                <input v-model="form.diamonds" type="number">
            </div>
            <br>
            <div>
                <button @click="addReward" >ADD</button>
            </div>
        </div>
    </div>
</template>

<script>
import RewardApiStore from '@/store/RewardApi' 

export default {
    data() {
        return {
            form : {
                menu: '',
                diamonds: ''
            }
        }
    },

    methods: {
        clearForm() {
            this.form = {
                name: "",
                name_jp: "",
                pokemon_types: ""
            }
        },
        async addReward() {
            let payload = {
                menu: this.form.menu,
                diamonds: this.form.diamonds //parseInt(this.form.diamonds, 10)
            }

            console.log(payload)
            let res = await RewardApiStore.dispatch("addReward", payload)
            console.log(res)
            if (res.success) {
                this.clearForm()
                this.$router.push("/admin/rewards")
            }
            else {
                this.$swal("Add Failed", res.message, "error")
            }
        }
    }

}
</script>

<style>

</style>