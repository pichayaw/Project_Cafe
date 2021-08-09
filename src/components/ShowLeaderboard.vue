<template>
  <div>
    <h1>Leaderboard</h1>
    <div>
      <label for="start">date</label>
      <input type="date" v-model="date.start" />
      <input type="date" v-model="date.end" />
    </div>

    <br>
      <button @click="sortByGet">Sort Diamonds Get</button>
    <br>
    <br>
      <button @click="sortByEarn">Sort Diamonds Earn</button>
    <br>

    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Get Diamonds</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ productHistories(user) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <br />
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>EARN Diamonds</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ rewardHistories(user) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserApi from "@/store/UserApi";
import moment from "moment";
export default {
  data() {
    return {
      users: [],
      date: {
        start: "",
        end: "",
      },
    };
  },
  async created() {
    this.fetchUser();
    
  },

  methods: {
    async fetchUser() {
      await UserApi.dispatch("fetchUser");
      let res = UserApi.getters.users;
      res.forEach((element) => {
        if (element.username !== "admin") {
          this.users.push(element);
        }
      });
    },

    dateGet(user) {
      let d = 0 ;
      let start;
      let end;

      if (this.date.start == "") {
        start = 0;
        end = 0;
      } else {
        start = moment(this.date.start).format('YYYY-MM-DD');
        end = moment(this.date.end).format('YYYY-MM-DD');
      }
      user.product_histories.forEach((product) => {
        d = moment(product.created_at).format('YYYY-MM-DD');
        if (start <= d && end >= d) {
          // console.log("Date",d);
          
        }
        console.log("Date",d);
      });
      return d;
    },

    productHistories(user) {
      let sum = 0;
      let d;
      let start;
      let end;
      if (this.date.start == "") {
        start = 0
        end = 0
        // (start = 0), (end = 0);
      } else {
        start = moment(this.date.start).format('YYYY-MM-DD');
        end = moment(this.date.end).format('YYYY-MM-DD');
      }
      user.product_histories.forEach((element) => {
        d = moment(element.created_at).format('YYYY-MM-DD');
        if (start <= d && end >= d) {
          sum += element.diamond_point;
        }
      });
      return sum;
    },

    dateEarn(user) {
      let d;
      let start;
      let end;

      if (this.date.start == "") {
        start = 0;
        end = 0;
      } else {
        start = moment(this.date.start).format('YYYY-MM-DD');
        end = moment(this.date.end).format('YYYY-MM-DD');
      }
      user.reward_histories.forEach((reward) => {
        d = moment(reward.created_at).format('YYYY-MM-DD');
        if (start <= d && end >= d) {
          return d;
        }
      });
    },

    rewardHistories(user) {
      let sum = 0;
      let d;
      let start;
      let end;
      if (this.date.start == "") {
        start = 0
        end = 0
        // (start = 0), (end = 0);
      } else {
        start = moment(this.date.start).format("YYYY-MM-DD");
        end = moment(this.date.end).format("YYYY-MM-DD");
      }
      user.reward_histories.forEach((element) => {
        d = moment(element.created_at).format("YYYY-MM-DD");
        if (start <= d && end >= d) {
          sum += element.reward_point;
        }
      });
      return sum;
    },

    sortByGet() {
      this.users.sort(
        (a, b) => this.productHistories(b) - this.productHistories(a)
      );
    },

    sortByEarn() {
      this.users.sort(
        (a, b) => this.rewardHistories(b) - this.rewardHistories(a)
      );
    },
  },
};
</script>

<style></style>
