<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Menu</th>
                    <th>Diamonds</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rewa, index) in rewards" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ rewa.menu }}</td>
                    <td>{{ rewa.diamonds }}</td>
                    <td v-if="isAuthen()">
                        <router-link :to="{name: 'AdminEditReward', params: {id: rewa.id}}">
                            Edit
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
            // editIndex: -1,
                form : {
                    id: '',
                    menu: '',
                    diamonds: ''
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