<template>
    <div class="addnew">
        <div class="head">
        <h1><br> Add New Reward</h1><br>
        </div>
        <div class="input" align=center>
        <b-card
          img-src="@/assets/reward2.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"
          class="mb-2"
        >
        <b-card-text>
            <div class="menu">
                <label for="menu">Menu </label>
                &nbsp;<input v-model="form.menu" type="text">
            </div>
            <br>
            <div>
                <label for="diamonds">Diamonds </label>
                &nbsp;<input v-model="form.diamonds" type="number">
            </div>
            <br>
            <div>
                <label for="Stock">Stocks </label>
                &nbsp;<input v-model="form.Stock" type="number">
            </div>
            <br>
        </b-card-text>
            <div>
                <b-button variant="primary"  class="mb-2" @click="addReward" >
                    <b-icon icon="bag-plus-fill" aria-hidden="true"></b-icon> Add</b-button>
                &nbsp;&nbsp;<b-button variant="outline-primary" class="mb-2" @click="exit">
                    <b-icon icon="arrow-counterclockwise" aria-hidden="true"></b-icon> Exit</b-button>
            </div>
        </b-card>
        </div>
        

    </div>
</template>

<script>
import RewardApiStore from '@/store/RewardApi' 

export default {
    data() {
        return {
            form : {
                menu: '',
                diamonds: '',
                Stock: ''
            }
        }
    },

    methods: {
        clearForm() {
            this.form = {
                menu: '',
                diamonds: '',
                Stock: ''
            }
        },
        async addReward() {
            let payload = {
                menu: this.form.menu,
                diamonds: this.form.diamonds,
                Stock: this.form.Stock
            }

            console.log(payload)
            if (this.form.menu != "") {
                let res = await RewardApiStore.dispatch("addReward", payload)
                console.log(res)
                if (res.success) {
                    this.clearForm()
                    this.$router.push("/admin/rewards")
                }
                else {
                this.$swal("Add Failed", `You have to add Menu or Diamonds or Stocks`, "error")
            }
            }
            else {
                this.$swal("Add Failed", `You have to add Menu or Diamonds or Stocks`, "error")
            }
        },

        exit() {
            this.$router.push('/admin/rewards')
        }
    }

}
</script>

<style lang="scss" scoped>
.addnew{
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../assets/cake.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 110vh;
    color: #737f8b ;
    .head{
        border: solid#BCAAA4;
        height: 170px;
        background-color:#BCAAA4;
        color: white;
        margin-bottom: 40px;
        h1{
        font-weight: bold;
        font-size: 3em;
        text-shadow: 5px 5px rgb(124, 116, 107);
        letter-spacing: 3px;
        font-variant: small-caps;
        }
    }
    .menu{
        input{
        width: 20rem;
        }
    }
    
}

</style>