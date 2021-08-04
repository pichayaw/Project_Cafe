<template>
  <div>
    <div class="menu">
      <div class="ontop">
        
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators

          >
          <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-75 mx-auto d-block"
              width="100"
              height="300"
              src="@/assets/cafe1.jpg"
            >
          </template>
          </b-carousel-slide>
          <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-75 mx-auto d-block"
              width="100"
              height="300"
              src="@/assets/cafe2.jpg"
            >
          </template>
          </b-carousel-slide>
          <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-75 mx-auto d-block"
              width="1024"
              height="480"
              src="@/assets/cafe33.jpg"
            >
          </template>
          </b-carousel-slide>
          </b-carousel>
          </div>


    <div class="beverage">
      <h2>Baverage</h2>
      <h3>Highlight Beverages</h3>
      <img class="df" src="@/assets/drink2.jpg" alt="drink2">
      <img class="df" src="@/assets/drink1.jpg" alt="drink1">
      <img class="df" src="@/assets/drink3.jpg" alt="drink3">

      <b-table sticky-header="400px" :items="beverage">
        <thead>
          <tr>
            <th>Menu</th>
            <th>Hot</th>
            <th>Iced</th>
            <th>Blended</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,rows) in beverage" :key="rows">
            <td>{{row.menu}}</td>
            <td>{{row.hot}}</td>
            <td>{{row.iced}}</td>
            <td>{{row.blended}}</td>
          </tr>
        </tbody>
      </b-table>
      <img class="df" src="@/assets/drink4.jpg" alt="drink4">
      <img class="df" src="@/assets/drink6.jpg" alt="drink6">
      <img class="df" src="@/assets/drink5.jpg" alt="drink5">
    </div>


    <div class="food">
      <h2>Food</h2>
      <h3>Highlight Food</h3>
      <img class="df" src="@/assets/food1.jpg" alt="food1">
      <img class="df" src="@/assets/food2.jpg" alt="food2">
      <img class="df" src="@/assets/food3.jpg" alt="food3">
      <b-table sticky-header="300px" :items="food">
        <thead>
          <tr>
            <th>Menu</th>
            <th>Price</th>
  
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,rows) in food" :key="rows">
            <td>{{row.menu}}</td>
            <td>{{row.price}}</td>

          </tr>
        </tbody>
      </b-table>
      <img class="df" src="@/assets/food4.jpg" alt="food4">
      <img class="df" src="@/assets/food6.jpg" alt="food6">
      <img class="df" src="@/assets/food5.jpg" alt="food5">
    </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/store/Menu"

export default{
  data1(){
    return{
      beverage:[],
      food:[]
    }
  },
  created(){
    this.fetchInfo()
  },
  
  methods: {
      fetchInfo(){
        this.beverage=Menu.getters.data1
        console.log(this.beverage)
        this.food=Menu.getters.data2
        
}
  }
  
}

</script>


<style scoped lang="scss">
.menu{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  img{
    width: 25%;
  }
  color: #737f8b;
  .beverage,.food{
    h2{
      margin: 40px;
      border-bottom: 2px solid gray;
      padding: 20px;
      letter-spacing: 3px;
      font-weight: bold;
      font-size: 2em;
    }
    h3{
      margin: 0px 0px 0px 45px;
      letter-spacing: 2px;
      text-align: left;
    }
    .df{
      margin: 20px;
    }
    
  }

}
</style>
