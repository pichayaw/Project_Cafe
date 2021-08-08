<template>
  <div class="getreward">
    <div class="user" align="right">
      <label for=""
        >Username : {{ user.username }} and Diamonds :
        {{ user.diamond_point }}&nbsp;&nbsp;&nbsp;</label>
    </div>
    <h1>REWARDS</h1>
    <b-container fluid class="bv-example-row">
      <div class="reward-container">
        <div v-for="item in reward" :key="item.id">
          <div class="reward">
            <!-- {{reward}}  -->
            <label for=""> รูปภาพ</label><br />
            <label for="">Menu : </label>
            <label for=""> {{ item.menu }}</label
            ><br />
            <label for="">Diamonds : </label>
            <label for=""> {{ item.diamonds }}</label
            ><br />
            <label for="">Quantity :</label>
            <label for=""> {{ item.Stock }}</label
            ><br />
            <b-button variant="primary" @click="redeem(item)">Get Reward</b-button>
          </div>
        </div>
      </div>
    </b-container>
    <div></div>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";
import RewardsApiStore from "@/store/RewardApi";
export default {
  data() {
    return {
      reward: "",
      user: "",
    };
  },
  async created() {
    this.fetchRewards();
    this.user = await AuthUser.getters.user;
  },
  mounted() {
    if (!this.isAuthen()) {
      this.$swal("ห้ามเข้า", `ไป login ซะ`, "warning");
      this.$router.push("/");
    }
  },
  methods: {
    async fetchRewards() {
      await RewardsApiStore.dispatch("fetchReward");
      this.user = await AuthUser.getters.user;
      this.reward = RewardsApiStore.getters.rewards;
    },

    async redeem(item) {
      console.log(this.user);
      await AuthUser.dispatch("redeem", item);
      this.fetchRewards();
    },

    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style lang="scss" scoped>
.getreward {
  h1 {
    padding-top: 30px;
    border: solid#BCAAA4;
    height: 120px;
    background-color: #bcaaa4;
    letter-spacing: 4px;
    text-shadow: 5px 5px rgb(114, 98, 84);
    font-variant: small-caps;
    color: white;
  }
}
.user {
  padding-top: 20px;
  border: solid#A1887F;
  height: 70px;
  background-color: #a1887f;
  color: white;
  font-size: 1.1rem;
}
.reward-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
  
  .reward {
    padding-top: 20px;
    border: solid#A1887F;
    font-size: 1.1rem;
    margin:  20px;
  }
}
</style>
