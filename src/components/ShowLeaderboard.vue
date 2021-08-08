<template>
    <div>
        <h1>Leaderboard</h1>

    <div>
      <label for="start">date</label>
      <input type="date" v-model="date.start"> 
      <input type="date" v-model="date.end">
    </div>

    <div>
      <button >Sort by points used</button>
      <button >Sort by points earned</button>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>GET Diamonds</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ productHistories(index) }}</td>
            <td>{{ user.product_histories }}</td>
            <!-- <td>{{ dateGet(index) }}</td> -->
            <!-- <td>{{ dateFormater(user.created_at) }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>EARN Diamonds</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ rewardHistories(index) }}</td>
            <td>{{ user.reward_histories }}</td>
            <!-- <td>{{ dateFormater(user.created_at) }}</td> -->
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
            date:{
              start:'',
              end:''
            }
           
        }
    },
    
    async created(){
        this.fetchUser()
        this.user = await AuthUser.getters.user
        console.log();
    },

    methods: {

        async fetchUser(){
                await UserApi.dispatch('fetchUser')
                for(let i = 0; i <= UserApi.getters.users.length; i++) {
                    if( UserApi.getters.users[i].username !== "admin") {
                    this.users.push(UserApi.getters.users[i])
                    }
                }
               
            },

        dateGet(index) {
            for(let i = 0; i < this.users[index].product_histories.length; i++ ) {
                let timestamp = this.users[index].product_histories[i].created_at
                let date = new Date(timestamp)
                let options = {
                    year: 'numeric', month: 'numeric', day: 'numeric',
                    timeZone: 'Asia/Bangkok'
                };
                return new Intl.DateTimeFormat('en-GB', options).format(date)
            }
        },

        productHistories(index) {
            let sum = 0
            for(let j = 0; j < this.users[index].product_histories.length; j++ ){
                // console.log("lenght : ", this.users[index].product_histories.length)
                sum += this.users[index].product_histories[j].diamond_point
                console.log("SUM : ", sum);
                
            }
            return sum
                
        },

        rewardHistories(index) {
            let sum = 0
            for(let j = 0; j < this.users[index].reward_histories.length; j++ ){
                // console.log("lenght : ", this.users[index].reward_histories.length)
                sum += this.users[index].reward_histories[j].reward_point
                console.log("SUM : ", sum);
                
            }
            return sum
        },

        dateFormater(timestamp) {
            let date = new Date(timestamp)
            let options = {
                year: 'numeric', month: 'numeric', day: 'numeric',
                timeZone: 'Asia/Bangkok'
            };
            return new Intl.DateTimeFormat('en-GB', options).format(date)
        },



        
        
    }

}
</script>

<style>

</style>