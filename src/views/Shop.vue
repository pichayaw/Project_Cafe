<template>
  
  <div>
    <h1>this Shop page</h1>
    <div>
        <h1>beverage</h1>
    </div>
     <div class="shop-container">
        <div v-for="item in beverage" :key ="item.id">
            <div> 
                
                <label for="">รูปภาพ</label><br>
                <label for="">menu :</label>
                <label for=""> {{item.menu}}</label><br>
                <label for="">แบบร้อน {{item.hot_style}}</label>
                <button >ใส่ตระกร้า</button><br>
                <label for="">แบบเย็น {{item.ice_style}}</label>
                <button >ใส่ตระกร้า</button><br>
                <label for="">แบบปั่น {{item.blended_style}}</label>
                <button >ใส่ตระกร้า</button><br>
            </div> 
        </div>
      </div>
      <div>
        <h1>Food</h1>
      </div>
      <div class="shop-container">
        <div v-for="item in food" :key ="item.id">
            <div> 
                
                <label for=""> รูปภาพ</label><br>
                <label for="">menu :</label>
                <label for=""> {{item.menu}}</label><br>
                <label for="">ราคา {{item.price}}</label><br>
                <button >ใส่ตระกร้า</button><br>
               
            </div> 
        </div>
      </div>
  </div>
</template>

<script>
import AuthUser from '@/store/AuthUser'
import Food from '@/store/Menu'
import Water from '@/store/Food'
export default {
    data() 
    {
        return {
            user : "" ,
            food : "" ,
            beverage : ""
        }
    },
    async created()
    {
        
        this.user = await AuthUser.getters.user
        this.fetchMenu()
        this.fetchFood()
       
    },


    mounted()
    {
        if (!this.isAuthen()) {
            this.$swal("ห้ามเข้า", `ไป login ซะ`, "warning");
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


        isAuthen()
        {
            return AuthUser.getters.isAuthen
        }

    }
}
</script>

<style>
.shop-container
{
    display: grid ;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
}
</style>