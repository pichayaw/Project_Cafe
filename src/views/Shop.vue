<template>
  <div class="shop">
    <div class="user" align="right">
      <label for=""
        >Username : {{ user.username }} , Diamonds :
        {{ user.diamond_point }} and Balance :
        {{ user.money }}&nbsp;&nbsp;&nbsp;</label
      >
    </div>
    <h2>Baverage</h2>
    <b-container fluid class="bv-example-row">
      <div class="shop-container">
        <div v-for="water in beverage" :key="water.id">
          <div class="beverage">
            <label for="">Menu :&nbsp;&nbsp;</label>
            <label for=""> {{ water.menu }}</label
            ><br />
            <label v-if="water.hot_style != '-'" for=""
              >Hot : {{ water.hot_style }} Baht</label
            >
            &nbsp;&nbsp;&nbsp;<b-button
              variant="warning"
              v-if="water.hot_style != '-'"
              @click="buyHot(water)"
            >
              BUY</b-button
            ><br v-if="water.hot_style != '-'" />
            <label v-if="water.ice_style != '-'" for=""
              >Iced : {{ water.ice_style }} Baht</label
            >
            &nbsp;&nbsp;&nbsp;<b-button
              variant="danger"
              v-if="water.ice_style != '-'"
              @click="buyIce(water)"
            >
              BUY</b-button
            ><br v-if="water.ice_style != '-'" />
            <label v-if="water.blended_style != '-'" for=""
              >Blended : {{ water.blended_style }} Baht</label
            >
            &nbsp;&nbsp;&nbsp;<b-button
              variant="info"
              v-if="water.blended_style != '-'"
              @click="buyBlended(water)"
            >
              BUY</b-button
            ><br v-if="water.blended_style != '-'" />
          </div>
        </div>
      </div>
    </b-container>

    <h2>Food</h2>
    <b-container fluid class="bv-example-row">
      <div class="shop-container">
        <div v-for="kao in food" :key="kao.id">
          <div class="food">
            <label for="">Menu :&nbsp;&nbsp; </label>
            <label for=""> {{ kao.menu }}</label
            ><br />
            <label for="">Price : {{ kao.price }} Baht</label
            ><br />
            <b-button variant="primary" @click="buyFood(kao)">BUY</b-button
            ><br />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import AuthUser from "@/store/AuthUser";
import Food from "@/store/Menu";
import Water from "@/store/Food";
export default {
  data() {
    return {
      user: "",
      food: "",
      beverage: "",
    };
  },
  async created() {
    this.user = await AuthUser.getters.user;

    this.fetchMenu();
    this.fetchFood();

    if (!this.isAuthen()) {
      this.$swal("Please Login before using this feature", "warning");
      this.$router.push("/");
    } else if (this.user.id === 2) {
      this.$swal(
        "You’re not allow to purchase, as admin please create a new user to access this feature",
        "warning"
      );
      this.$router.push("/");
    }
  },

  methods: {
    async fetchMenu() {
      await Food.dispatch("fetchMenu");
      this.beverage = Food.getters.menu;
      console.log(this.beverage);
    },

    async fetchFood() {
      await Water.dispatch("fetchFood");
      this.food = Water.getters.food;
      console.log(this.food);
    },
    async buyHot(water) {
      console.log(1);
      if (this.user.money >= water.hot_style && this.user.id !== 2) {
        if (this.user.id !== 2) {
          swal({
            title: "Confirm",
            text: `Would you like to buy hot ${water.menu} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("Successful", {
                icon: "success",
              });
              await AuthUser.dispatch("buyHot", water);
              location.reload();
            } else {
              swal("Canceled");
            }
          });
        } else {
          await this.$swal("Can not be redeemed.", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("can’t purchase becuase you are admin", "", "warning");
      } else {
        await this.$swal("Not enough money.", "", "warning");
      }
    },
    async buyIce(water) {
      console.log(1);
      if (this.user.money >= water.ice_style && this.user.id !== 2) {
        if (this.user.id !== 2) {
          swal({
            title: "Confirm",
            text: `Would you like to buy iced ${water.menu} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("Successful", {
                icon: "success",
              });
              await AuthUser.dispatch("buyIce", water);
              location.reload();
            } else {
              swal("Canceled");
            }
          });
        } else {
          await this.$swal("Can not be redeemed.", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("can’t purchase becuase you are admin", "", "warning");
      } else {
        await this.$swal("Not enough money.", "", "warning");
      }
    },
    async buyBlended(water) {
      if (this.user.money >= water.blended_style && this.user.id !== 2) {
        if (this.user.id !== 2) {
          swal({
            title: "Confirm",
            text: `Would you like to buy blened ${water.menu} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("Successful", {
                icon: "success",
              });
              await AuthUser.dispatch("buyBlended", water);
              location.reload();
            } else {
              swal("Canceled");
            }
          });
        } else {
          await this.$swal("Can not be redeemed.", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("can’t purchase becuase you are admin", "", "warning");
      } else {
        await this.$swal("Not enough money.", "", "warning");
      }
    },

    async buyFood(food) {
      if (this.user.money >= food.price && this.user.id !== 2) {
        if (this.user.id !== 2) {
          swal({
            title: "Confirm",
            text: `Would you like to buy ${food.menu} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("Successful", {
                icon: "success",
              });
              await AuthUser.dispatch("buyFood", food);
              location.reload();
            } else {
              swal("Canceled");
            }
          });
        } else {
          await this.$swal("Can not be redeemed.", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("You’re not allow to purchase, as admin please create a new user to access this feature", "", "warning");
      } else {
        await this.$swal("Not enough money.", "", "warning");
      }
    },

    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style lang="scss" scoped>
.shop {
  .user {
    padding-top: 20px;
    border: solid#A1887F;
    height: 70px;
    background-color: #a1887f;
    color: white;
    font-size: 1.1rem;
  }
  h2 {
    margin: 40px;
    border-bottom: 2px solid gray;
    padding: 20px;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 2em;
    color: #737f8b;
  }
  .shop-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;

    .beverage {
      padding-top: 20px;
      border: solid#BCAAA4;
      background-color: #bcaaa4;
      color: white;
      font-size: 1.1rem;
      margin: 20px;
      height: 190px;
    }
    .food {
      padding-top: 20px;
      border: solid#A1887F;
      background-color: #a1887f;
      color: white;
      font-size: 1.1rem;
      margin: 20px;
      height: 150px;
    }
  }
}
</style>
