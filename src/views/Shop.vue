<template>
  <div>
    <h1>this Shop page</h1>
    <div>
      <h1>beverage</h1>
    </div>
    <div class="shop-container">
      <div v-for="water in beverage" :key="water.id">
        <div>
          <label for="">รูปภาพ</label><br />
          <label for="">menu :</label>
          <label for=""> {{ water.menu }}</label
          ><br />
          <label v-if="water.hot_style != '-'" for=""
            >แบบร้อน {{ water.hot_style }}</label
          >
          <button v-if="water.hot_style != '-'" @click="buyHot(water)">
            BUY</button
          ><br v-if="water.hot_style != '-'" />
          <label v-if="water.ice_style != '-'" for=""
            >แบบเย็น {{ water.ice_style }}</label
          >
          <button v-if="water.ice_style != '-'" @click="buyIce(water)">
            BUY</button
          ><br v-if="water.ice_style != '-'" />
          <label v-if="water.blended_style != '-'" for=""
            >แบบปั่น {{ water.blended_style }}</label
          >
          <button v-if="water.blended_style != '-'" @click="buyBlended(water)">
            BUY</button
          ><br v-if="water.blended_style != '-'" />
        </div>
      </div>
    </div>
    <div>
      <h1>Food</h1>
    </div>
    <div class="shop-container">
      <div v-for="kao in food" :key="kao.id">
        <div>
          <label for=""> รูปภาพ</label><br />
          <label for="">menu :</label>
          <label for=""> {{ kao.menu }}</label
          ><br />
          <label for="">ราคา {{ kao.price }}</label
          ><br />
          <button @click="buyFood(kao)">BUY</button><br />
        </div>
      </div>
    </div>
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
      this.$swal("ห้ามเข้า", `ไป login ซะ`, "warning");
      this.$router.push("/");
    } else if (this.user.id === 2) {
      this.$swal(
        "ห้ามเข้า คุณเป็น ADMIN",
        `กรุณาสร้างบัญชี user เพื่อซื้อของ`,
        "warning"
      );
      this.$router.push("/");
    }
  },

  // async mounted()
  // {
  //     if (!this.isAuthen()) {

  //         this.$swal("ห้ามเข้า", `ไป login ซะ`, "warning");
  //         this.$router.push("/");
  //     }
  //     else if (this.user.id === 2)
  //     {
  //         this.$swal("ห้ามเข้า คุณเป็น ADMIN", `กรุณาสร้างบัญชี user เพื่อซื้อของ`, "warning");
  //         this.$router.push("/");
  //     }

  // },

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
            title: "ยืนยัน",
            text: `คุณจะซื้อ ${water.menu} แบบร้อนหรือไม่`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("ซื้อเสร็จสิ้น", {
                icon: "success",
              });
              await AuthUser.dispatch("buyHot", water);
              location.reload();
            } else {
              swal("ยกเลิกแล้ว");
            }
          });
        } else {
          await this.$swal("ไม่สามารถแลกได้", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("คุณเป็น admin ซื้อของไม่ได้", "", "warning");
      } else {
        await this.$swal("ตังไม่พอ", "", "warning");
      }
    },
    async buyIce(water) {
      console.log(1);
      // console.log(water.hot_style);
      if (this.user.money >= water.ice_style && this.user.id !== 2) {
        if (this.user.id !== 2) {
          swal({
            title: "ยืนยัน",
            text: `คุณจะซื้อ ${water.menu} แบบเย็นหรือไม่`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("ซื้อเสร็จสิ้น", {
                icon: "success",
              });
              await AuthUser.dispatch("buyIce", water);
              location.reload();
            } else {
              swal("ยกเลิกแล้ว");
            }
          });
        } else {
          await this.$swal("ไม่สามารถแลกได้", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("คุณเป็น admin ซื้อของไม่ได้", "", "warning");
      } else {
        await this.$swal("ตังไม่พอ", "", "warning");
      }
    },
    async buyBlended(water) {
      console.log(1);
      // console.log(water.hot_style);

      if (this.user.money >= water.blended_style && this.user.id !== 2) {
        if (this.user.id !== 2) {
          swal({
            title: "ยืนยัน",
            text: `คุณจะซื้อ ${water.menu} แบบปั่นหรือไม่`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("ซื้อเสร็จสิ้น", {
                icon: "success",
              });
              await AuthUser.dispatch("buyBlended", water);
              location.reload();
            } else {
              swal("ยกเลิกแล้ว");
            }
          });
        } else {
          await this.$swal("ไม่สามารถแลกได้", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("คุณเป็น admin ซื้อของไม่ได้", "", "warning");
      } else {
        await this.$swal("ตังไม่พอ", "", "warning");
      }
    },

    async buyFood(food) {
      console.log(1);
      // console.log(water.hot_style);
      if (this.user.money >= food.price && this.user.id !== 2) {
        if (this.user.id !== 2) {
          swal({
            title: "ยืนยัน",
            text: `คุณจะซื้อ ${food.menu} หรือไม่`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then(async (willRedeem) => {
            if (willRedeem) {
              swal("ซื้อเสร็จสิ้น", {
                icon: "success",
              });
              await AuthUser.dispatch("buyFood", food);
              location.reload();
            } else {
              swal("ยกเลิกแล้ว");
            }
          });
        } else {
          await this.$swal("ไม่สามารถแลกได้", "", "warning");
        }
      } else if (this.user.id === 2) {
        await this.$swal("คุณเป็น admin ซื้อของไม่ได้", "", "warning");
      } else {
        await this.$swal("ตังไม่พอ", "", "warning");
      }
    },

    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style>
.shop-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
}
</style>
