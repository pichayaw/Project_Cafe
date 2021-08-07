<template>
  <div>
    <h1>REWARDS</h1>
    <div v-for="item in reward" :key ="item.id">
      <div class="reward-container">
        <!-- {{reward}}  -->
        <label for=""> รูปภาพ</label><br>
        <label for="">menu : </label>
        <label for="">{{item.menu}}</label><br>
        <label for="">diamond point : </label>
        <label for=""> {{item.diamonds}}</label><br>
        <label for="">จำนวน : </label>
        <label for="">{{item.Stock}}</label><br>
        <button @click="minusDiamondPoint(item)">แลกของ</button>
      </div>
    </div>
    <div>
     
    </div>
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
    console.log("sore", this.user);
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
      this.reward = RewardsApiStore.getters.rewards;
      console.log(this.reward);
    },

    async minusDiamondPoint(item) {
      console.log("this" ,item.id);
      
      let res = await AuthUser.dispatch("minusPoint", this.user.diamond_point);
    },
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style>

</style>
