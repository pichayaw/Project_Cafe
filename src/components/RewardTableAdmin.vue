<template>
    <div class="container">
        <table class="table table-striped table-hover" sticky-header="400px">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Menu</th>
                    <th>Diamonds</th>
                    <th>Stocks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rewa, index) in rewards" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ rewa.menu }}</td>
                    <td>{{ rewa.diamonds }}</td>
                    <td>{{ rewa.Stock }}</td>
                    <td v-if="isAuthen()">
                        <router-link :to="{name: 'AdminEditReward', params: {id: rewa.id}}">
                            <b-button pill variant="outline-danger">Edit</b-button>
                        </router-link>
                    </td>
                    

                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import RewardApiStore from '@/store/RewardApi' 
import AuthUser from "@/store/AuthUser"

export default {
    data() {
        return {
            rewards: [],
                form : {
                    id: '',
                    menu: '',
                    diamonds: '',
                    Stock: ''
                }
        }
    },

    created() {
            this.fetchReward()
    },

    methods: {
        isAuthen() {
                return AuthUser.getters.isAuthen
        },

        async fetchReward() {
            await RewardApiStore.dispatch('fetchReward')
            this.rewards = RewardApiStore.getters.rewards
            console.log(this.form)
        },

    }

}
</script>

<style>

</style>