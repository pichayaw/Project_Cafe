<template>
  <div class="topup">
    <div class="user" align="right">
      <label for=""
        >Username : {{ user.username }} and Diamonds :
        {{ user.diamond_point }}&nbsp;&nbsp;&nbsp;</label
      >
    </div>

    <img src="@/assets/top.jpg" alt="food1" />
    <div class="balance">
      <h2>Balance : {{ user.money }} Baht</h2>
    </div>
    <h3>Top Up</h3>

    <div class="amount">
      <input
        type="number"
        placeholder="please enter amount"
        autocomplete="off"
        v-model="money"
      />
      &nbsp;<b-button variant="primary" class="mb-2" @click="plusMoney">
        <b-icon icon="check2-circle" aria-hidden="true"></b-icon>
        Confirm</b-button
      >
    </div>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";
export default {
  data() {
    return {
      user: "",
      money: 0,
    };
  },
  async created() {
    let user = await AuthUser.getters.user;
    this.user = user;
  },

  mounted() {
    if (!this.isAuthen()) {
      this.$swal("Can not open this page", `please login`, "warning");
      this.$router.push("/");
    }
  },

  methods: {
    async plusMoney() {
      let res = await AuthUser.dispatch("topup", this.money);
      if (res) {
        await this.$swal("Transaction Successfully", "", "success");
        location.reload();
      }
    },

    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  padding-top: 20px;
  border: solid#A1887F;
  height: 70px;
  background-color: #a1887f;
  color: white;
  font-size: 1.1rem;
}
.topup {
  color: #737f8b;
  img {
    width: 100vw;
    height: 250px;
  }
  h3 {
    border-bottom: 2px solid gray;
    margin: 0 40px 10px 40px;
    padding: 30px 0 20px 0;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 3em;
    font-variant: small-caps;
    text-shadow: 5px 5px rgb(185, 183, 181);
  }
}
.balance {
  padding-top: 30px;
  border: solid#BCAAA4;
  height: 120px;
  background-color: #bcaaa4;
  color: white;
}
.amount {
  padding-top: 30px;
  border: solid#A1887F;
  height: 100px;
  background-color: #a1887f;
}
</style>