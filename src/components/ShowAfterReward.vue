<template>
  <div>
    <h1>REWARDS</h1>
    <div class="reward-container">
      <div v-for="item in reward" :key ="item.id">
        <div >
          <!-- {{reward}}  -->
          <label for=""> รูปภาพ</label><br>
          <label for="">menu</label>
          <label for=""> {{item.menu}}</label><br>
          <label for="">diamond point</label>
          <label for=""> {{item.diamonds}}</label><br>
          <label for="">จำนวน</label>
          <label for=""> {{item.Stock}}</label><br>
          <button @click="redeem(item)">แลกของ</button>
        </div>
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
    //console.log("sore", this.user);
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

    async redeem(item) {
      console.log("this" ,this.user);
      // let res = await AuthUser.dispatch("redeem", item);
      // await this.$swal("เติมเงินสำเร็จ","", "success");
      // location.reload()

      if(this.user.diamond_point >= this.reward.diamonds)
        {
          if (this.user.id !== 2)
          {
            swal({
              title: "ยืนยัน",
              text: `คุณจะแลก ${item.menu} หรือไม่`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then(async (willRedeem) => {
              if (willRedeem) {
                  
                swal("แลกของเสร็จสิ้น", {
                  icon: "success",
                });
                await AuthUser.dispatch("redeem", item);
                location.reload()
              } else {
                swal("ยกเลิกแล้ว");
              }
            });
          }
          else
          {
            await this.$swal("ไม่สามารถแลกได้","", "warning");
          }
        }
        else
        { 
            await this.$swal("Diamond Point  ท่านไม่พอ","", "warning");
        }
      
    },
    
    
    
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
  },
};
</script>

<style>
.reward-container
{
  display: grid ;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.5rem;
  
}
</style>
