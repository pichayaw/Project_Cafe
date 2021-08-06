<template>
  <div class="rewards">
    <div class="head">
      <img src="@/assets/reward1.jpg" />
      <div class="inhead">
        <h1>FREE COFFEE FOR YOU</h1>
        <h3>Join now to start earning Rewards.</h3>
      </div>
    </div>

    <div class="getting">
      <h2>Getting started is easy</h2>
      <p>Earn Diamonds and get rewarded in a few easy steps.</p>

      <div class="ingetting">
        <p>
          1 <br />
          Create an account <br />
          <router-link to="/rewards/register">click</router-link>
        </p>
        <!--เชื่อม link สมัคร user ผู้ใช้-->
        <p>
          2 <br />
          Order and pay how you’d like
        </p>
        <p>
          3 <br />
          Earn Diamonds, get Rewards <br />
          <a href="http://localhost:8080/login">log in</a>
        </p>
        <!--เชื่อม link เข้าสู่ระบบผู้ใช้-->
      </div>
    </div>

    <div class="collectandgetdrink">
    <div class="collect">
      <p>
        As a member you’ll collect Diamonds on almost everything you buy and
        those Diamonds add up to (your really favorite) Rewards.
      </p>
      <h3>
        <b-icon icon="gem" font-scale="1.5"></b-icon> Collect 1 Diamonds per 25
        Baht
      </h3>
    </div>
    <div class="getdrink">
      <h3>
        <b-icon icon="cup-straw" font-scale="1.5"></b-icon>Get your favorite
        drink for free
      </h3>
      <p>
        use 25 Diamonds start
      </p>
    </div>
    </div>

  </div>
</template>

<script>
import RewardsApiStore from "@/store/Rewards"
export default{
  data(){
    return{
      rewards : [],
    }
  },
  created(){
    this.fetchRewards()
  },
  
  methods: {
      async fetchRewards(){
        await RewardsApiStore.dispatch("fetchRewards")
        this.rewards = RewardsApiStore.getters.rewards
        console.log(this.rewards);
      }
  }
}

</script>

<style lang="scss" scoped>

.rewards {
  color: #737f8b;
  .head {
    display: flex;
    img {
      width: 700px;
      margin: 40px 0 0 40px;
    }
    .inhead {
      padding-top: 150px;
      padding-left: 90px;
      color: rgb(116, 85, 66);
      letter-spacing: 3px;
      h1 {
        border-bottom: 2px solid rgb(146, 122, 106);
        padding: 20px;
        font-weight: bold;
      }
    }
  }
}

.getting {
  h2 {
    border-bottom: 2px solid gray;
    margin: 0 40px 10px 40px;
    padding: 50px 0 20px 0;
    letter-spacing: 3px;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    letter-spacing: 3px;
  }
  .ingetting {
    display: flex;
    margin: 40px 30px 0 30px;
    p {
      padding: 0 80px 30px 80px;
      text-align: center;
    }
  }
}

.collectandgetdrink {
  font-size: 1.3em;
}

.collect{
  p{
    border: solid #8D6E63;
    height: 120px;
    background-color: #8D6E63;
    padding-top: 30px;
    color: white;
  }
  h3{
    padding-top: 30px;
    border: solid#A1887F  ;
    height: 120px;
    background-color:#A1887F  ;
    color: white;
  } 
}
.getdrink{
  padding-top: 20px;
  border: solid#BCAAA4;
  height: 120px;
  background-color:#BCAAA4;
  color: white;
}

</style>
