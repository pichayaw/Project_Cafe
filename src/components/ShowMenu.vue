<template>
  <div class="menu">
    <img class="mySlides" alt="CScafe1" src="@/assets/cafe1.jpg" style="width:100%">
    <img class="mySlides" src="@/assets/cafe2.jpg" alt="CScafe2" style="width:100%">
    <img class="mySlides" src="@/assets/cafe33.jpg" alt="CScafe3" style="width:100%">

    <div class="beverage">
      <h2>Baverage</h2>
      <h3>Highlight Beverages</h3>
      <img class="drink" src="@/assets/drink2.jpg" alt="drink2">
      <img class="drink" src="@/assets/drink1.jpg" alt="drink1">
      <img class="drink" src="@/assets/drink3.jpg" alt="drink3">

      <b-table sticky-header="500px" :items="beverage">
        <thead>
          <tr>
            <th>Menu</th>
            <th>Hot</th>
            <th>Iced</th>
            <th>Blended</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,rows) in info" :key="rows">
            <td>{{row.menu}}</td>
            <td>{{row.hot}}</td>
            <td>{{row.iced}}</td>
            <td>{{row.blended}}</td>
          </tr>
        </tbody>
      </b-table>
      <img class="drink" src="@/assets/drink4.jpg" alt="drink4">
      <img class="drink" src="@/assets/drink6.jpg" alt="drink6">
      <img class="drink" src="@/assets/drink5.jpg" alt="drink5">
    </div>


    <div class="food">
      <h2>Food</h2>
      <h3>Highlight Food</h3>
      <img src="@/assets/food1.jpg" alt="food1">
      <img src="@/assets/food2.jpg" alt="food2">
      <img src="@/assets/food3.jpg" alt="food3">
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
      <img src="@/assets/food4.jpg" alt="food4">
      <img src="@/assets/food6.jpg" alt="food6">
      <img src="@/assets/food5.jpg" alt="food5">
    </div>
  </div>
</template>

<script>
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}
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
        console.log(this.info)
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
  .beverage{
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
    .drink{
      margin: 20px;
    }
  }
}
</style>
