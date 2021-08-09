<template>
    <div>
        <h1>Leaderboard</h1>

    <div>
      <label for="start">date</label>
      <input type="date" v-model="date.start"> 
      <input type="date" v-model="date.end">
    </div>

      <!-- <br>
        <button @click="sortByGet">Sort by Diamonds Get</button>
      <br>
      <br>
      <button @click="sortByEarn">Sort by Diamonds Earn</button>
      <br> -->
    
    <div>
      <div>
        
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>GET Diamonds</th>
            <!-- <th>Date</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ productHistories(index) }}</td>
            <!-- <td>{{ dateGet(index) }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <br>
    <div>
      <div>
        
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>EARN Diamonds</th>
            <!-- <th>Date</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ rewardHistories(index) }}</td>
            <!-- <td>{{ dateEarn(index) }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
    

    </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import UserApi from '@/store/UserApi'
import moment from 'moment'

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
        this.sortByGet()
        this.sortByEarn()
        
    },

    computed: {
        sortByGet(){
          console.log("THIS USER : ", this.users );
          this.users.sort((a, b) => {
            return this.productHistories(b) - this.productHistories(a)})
        },
        sortByEarn(){
          this.users.sort((a, b) => {
            return this.rewardHistories(b) - this.rewardHistories(a)})
        }
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
        isDate(date) {
          return date
        },

        dateGet(index) {
            let d
            let start
            let end 
          
          if(this.date.start == ''){
            start = 0
            end = 0
          }else{
            start = moment(this.date.start).format('YYYY-MM-DD')
            end = moment(this.date.end).format('YYYY-MM-DD')
          }
          
          for(let j = 0; j < this.users[index].product_histories.length; j++ ){
              // console.log("lenght : ", this.users[index].product_histories.length)
              d = moment(this.users[index].product_histories[j].created_at).format('YYYY-MM-DD')
              if(start <= d && end >= d){
                  return d 
    
              }                   
          }
          
        },

        productHistories(index) {
          let sum = 0
          let d
          let start
          let end 
          
          if(this.date.start == ''){
            start = 0
            end = 0
          }else{
            start = moment(this.date.start).format('YYYY-MM-DD')
            end = moment(this.date.end).format('YYYY-MM-DD')
          }
          console.log("--------------GET-------------");
          console.log("Date start of GET :", start);
          console.log("Date end of GET :", end);
            for(let j = 0; j < this.users[index].product_histories.length; j++ ){
                d = moment(this.users[index].product_histories[j].created_at).format('YYYY-MM-DD')
                if(start <= d && end >= d){
                    console.log("-----")
                    console.log("USER of GET :", this.users[index].username);
                    console.log("SUM of GET : ", sum);
                    console.log('between start and end')
                    sum += this.users[index].product_histories[j].diamond_point
                    
                } 
            // return new Intl.DateTimeFormat('en-GB', options).format(d) moment(this.users[index].product_histories[j].created_at).format('YYYY-MM-DD');
               
            }
            return sum
          
        },

        dateEarn(index) {
            let d
            let start
            let end 
          
          if(this.date.start == ''){
            start = 0
            end = 0
          }else{
            start = moment(this.date.start).format('YYYY-MM-DD')
            end = moment(this.date.end).format('YYYY-MM-DD')
          }
          
          for(let j = 0; j < this.users[index].reward_histories.length; j++ ){
              console.log("lenght : ", this.users[index].product_histories.length)
              d = moment(this.users[index].reward_histories[j].created_at).format('YYYY-MM-DD')
              if(start <= d && end >= d){
                  return d 
    
              }                   
          }
          
        },

        rewardHistories(index) {
            let sum = 0
            let d
            let start
            let end 
            
            if(this.date.start == ''){
              start = 0
              end = 0
            }else{
              start = moment(this.date.start).format('YYYY-MM-DD')
              end = moment(this.date.end).format('YYYY-MM-DD')
            }
            console.log("--------------EARN-------------");
            console.log("Date start of EARN :", start);
            console.log("Date end of EARN :", end);
            for(let j = 0; j < this.users[index].reward_histories.length; j++ ){
              d = moment(this.users[index].reward_histories[j].created_at).format('YYYY-MM-DD')
                if(start <= d && end >= d){
                    console.log("-----")
                    console.log("USER of EARN :", this.users[index].username);
                    console.log("SUM of EARN : ", sum);
                    console.log('between start and end')
                    sum += this.users[index].reward_histories[j].reward_point
                    
                }
                    
            }
            return sum
        },

        // sortByGet(){
        //   console.log("THIS USER : ", this.users );
        //   this.users.sort((a, b) => this.productHistories(b) - this.productHistories(a))
          
        // },
        // sortByEarn(){
        //   this.users.sort((a, b) => this.rewardHistories(b) - this.rewardHistories(a))
        // }



        
    }

}
</script>

<style>

</style>