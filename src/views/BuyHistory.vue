<template>
  <div class="history">
    <div class="user" align="right">
      <label for="">Username : {{ user.username }} and Diamonds :
        {{ user.diamond_point }}&nbsp;&nbsp;&nbsp;</label>
    </div>
    <div class="container">
      <br />
      <table class="table table-striped table-hover" sticky-header="400px">
        <thead class="bg-dark text-white">
          <tr>
            <th colspan="6">Menu Histories</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Food</th>
            <th>Beverage</th>
            <th>Type</th>
            <th>Price</th>
            <th>Diamonds</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(history, index) in user.product_histories" :key="index">
            <td>{{ dateFormater(history.created_at) }}</td>
            <td>{{ getFood(history.food) }}</td>
            <td>{{ getBeverage(history.beverage) }}</td>
            <td>{{ history.type}}</td>
            <td>{{ history.price }}</td>
            <td>{{ history.diamond_point }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <br />
    <div class="container">
      <table class="table table-striped table-hover" sticky-header="400px">
        <thead class="bg-secondary text-white">
          <tr>
            <th colspan="3">Rewards Histories</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Rewards</th>
            <th>Diamonds</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(history1, index) in user.reward_histories" :key="index">
            <td>{{ dateFormater(history1.created_at) }}</td>
            <td>{{ getRewards(history1.reward) }}</td>
            <td>{{ history1.reward_point }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";
import FoodStore from "@/store/Food";
import MenuStore from "@/store/Menu";
import RewardStore from "@/store/Rewards";
export default {
  data() {
    return {
      user: [],
      foods: [],
      beverages: [],
      rewards: [],
    };
  },
  async created() {
    this.user = await AuthUser.getters.user;
    await FoodStore.dispatch("fetchFood");
    this.foods = FoodStore.getters.food;
    await MenuStore.dispatch("fetchMenu");
    this.beverages = MenuStore.getters.menu;
    await RewardStore.dispatch("fetchRewards");
    this.rewards = RewardStore.getters.rewards;
    
  },
  mounted()
    {
        if (!this.isAuthen()) {
            this.$swal("Please Login before using this feature", "warning");
            this.$router.push("/");
        }
    },
  methods: {
    getFood(id) {
      for (let i = 0; i < this.foods.length; i++) {
        if (this.foods[i].id === id) {
          return this.foods[i].menu;
        }
      }
      return "-";
    },
    getBeverage(id) {
      for (let i = 0; i < this.beverages.length; i++) {
        if (this.beverages[i].id === id) {
          return this.beverages[i].menu;
        }
      }
      return "-";
    },
    getRewards(id) {
      for (let i = 0; i < this.rewards.length; i++) {
        if (this.rewards[i].id === id) {
          return this.rewards[i].menu;
        }
      }
      return "-";
    },
    dateFormater(timestamp) {
      let date = new Date(timestamp);
      let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Asia/Bangkok",
      };
      return new Intl.DateTimeFormat("en-GB", options).format(date);
    },

    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  .user {
    padding-top: 20px;
    border: solid#A1887F;
    height: 70px;
    background-color: #a1887f;
    color: white;
    font-size: 1.1rem;
  }
}
</style>