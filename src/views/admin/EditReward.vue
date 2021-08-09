<template>
    <div class="edit">
        <div class="head">
            <h1><br> Edit Reward</h1><br>

        </div>

        <div class="input" align=center>
            <b-card
                img-src="@/assets/pancake.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2"
            >
            <b-card-text>
                <div class="menu">
                    <label for="menu">Menu</label>
                    &nbsp;<input v-model="form.menu" type="text">
                </div>

                <div>
                    <br><label for="diamonds">Diamonds</label>
                    &nbsp;<input v-model="form.diamonds" type="number">
                </div>
                    <br><label for="Stock">Stocks</label>
                    &nbsp;<input v-model="form.Stock" type="number">
                <div>

                </div>
            </b-card-text>
                <div>
                    <b-button variant="primary"  class="mb-2" @click="editReward">
                        <b-icon icon="bag-check-fill" aria-hidden="true"></b-icon> Update</b-button>
                    
                    &nbsp;&nbsp;<b-button variant="primary"  class="mb-2" @click="deleteReward">
                        <b-icon icon="trash-fill" aria-hidden="true"></b-icon> Delete</b-button>

                    &nbsp;&nbsp;<b-button variant="outline-primary"  class="mb-2" @click="exit">
                        <b-icon icon="arrow-counterclockwise" aria-hidden="true"></b-icon> Exit</b-button>
                </div>
            </b-card>
        </div>



    </div>
</template>

<script>
import RewardApiStore from '@/store/RewardApi' 
import AdminService from '@/services/AdminService'
import AuthUser from "@/store/AuthUser"

export default {
    data() {
        return {
            id: '',
            form: {
                menu: '',
                diamonds: '',
                Stock: ''
            }
        }
    },

    mounted() {
        if ( AuthUser.getters.id !== 2) {
            this.$swal("Restricted Area", `You have no permission, You aren't admin` , " warning")
            this.$router.push("/")
        }
        
    },

    async created() {
        this.id = this.$route.params.id
        let reward = await AdminService.getRewardById(this.id)
        this.form.menu = reward.menu
        this.form.diamonds = reward.diamonds
        this.form.Stock = reward.Stock
    },

    methods: {
        isAuthen() {
            return AuthUser.getters.isAuthen
        },

        async editReward() {
            let payload = {
                id: this.id,
                menu: this.form.menu,
                diamonds: this.form.diamonds,
                Stock: this.form.Stock
            }

            let res = await RewardApiStore.dispatch("editReward", payload)
            if (res.success) {
                this.$router.push("/admin/rewards")
            }
            else {
                this.$swal("Edit Failed", res.message, "error")
            }
        },

        exit() {
            
            if (this.form.diamonds >= 0 || this.form.Stock >= 0) {
                this.$router.push('/admin/rewards')
            }
            else {
                this.$swal("Edit Failed", `Cannot edit Diamonds or Stocks less than 0 , Diamonds : ${this.form.diamonds} & Stocks : ${this.form.Stock} `, "error")
                
            }
            
        },

        async deleteReward() {
            let payload = {
                id: this.id,
                menu: this.form.menu,
                diamonds: this.form.diamonds,
                Stock: this.form.Stock
            }

            let res = await RewardApiStore.dispatch("deleteReward", payload)
            if (res.success) {
                this.$router.push("/admin/rewards")
            }
            else {
                this.$swal("Delete Failed", res.message, "error")
            }
        },


        async deleteReward() {
            let payload = {
                id: this.id,
                menu: this.form.menu,
                diamonds: this.form.diamonds,
                Stock: this.form.Stock
            }

            let res = await RewardApiStore.dispatch("deleteReward", payload)
            if (res.success) {
                this.$router.push("/admin/rewards")
            }
            else {
                this.$swal("Delete Failed", res.message, "error")
            }
        },
    }

}
</script>

<style lang="scss" scoped>
.edit{
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../../assets/cake2.jpg");
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