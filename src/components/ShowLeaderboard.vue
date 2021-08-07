<template>
    <div>
        <h1>Leaderboard</h1>

    <!-- <div>
      <button @click="sortByUsed">Sort by points used</button>
      <button @click="sortByEarn">Sort by points earned</button>
    </div>

    <div>
      <label for="start">date</label>
      <input type="date" v-model="date.start"> -
      <input type="date" v-model="date.end">
    </div> -->

    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            
          </tr>
        </tbody>
      </table>
    </div>
    

    </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import UserApi from '@/store/UserApi'
export default {
    data(){
        return{
            users:[],
           
        }
    },
    
     created(){
        this.fetchUser()
    },

    methods: {

        async fetchUser(){
                await UserApi.dispatch('fetchUser')
                this.users = UserApi.getters.users
                // console.log(this.users);
            },


       
        
    }

}
</script>

<style>

</style>