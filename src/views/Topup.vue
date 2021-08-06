<template>
  <div>
      <h1>this topup page</h1>
      <div>
          {{user.money}}
      </div>
      <div>
          <input type="number" placeholder="กรอกเงินด้วยถ้าอยากซื้อ" autocomplete="off" v-model="money">
          <button @click="plusMoney">เติมเงิน</button>
      </div>
  </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
export default {    
    data() 
    {
        return {
            user : "" ,
            money :null
        }
    },
    async created()
    {
        this.user = await AuthUser.getters.user
        console.log(this.user);
    },


    mounted()
    {
        if (!this.isAuthen()) {
            this.$swal("ห้ามเข้า", `ไป login ซะ`, "warning");
            this.$router.push("/");
        }
    },
   
    methods: {
        async plusMoney()
        {
            console.log("this1")
            let res = await AuthUser.dispatch("topup" , this.money)
            console.log("this" ,res)
            if(res)
            {
                location.reload()
            }
        },
        isAuthen()
        {
            return AuthUser.getters.isAuthen
        }

    }


}
</script>

<style>

</style>