<template>
    <div class="rewards">
        <div class="head">
            <img src="@/assets/reward1.jpg">
            <div class="inhead">
                <h1>FREE COFFEE FOR YOU</h1>
                <h3>Join now to start earning Rewards.</h3>
            </div>
        </div>
        
        <div class="getting">
            <h2>Getting started is easy</h2>
            <p>Earn Diamonds and get rewarded in a few easy steps.</p>

            <div class="ingetting">
                <p>1 <br> Create an account <br>
                <a href="">sign in</a></p> <!--เชื่อม link สมัคร user ผู้ใช้-->
                <p>2 <br> Order and pay how you’d like</p>
                <p>3 <br> Earn Diamonds, get Rewards <br>
                <a href="">log in</a></p> <!--เชื่อม link เข้าสู่ระบบผู้ใช้-->
            </div>
        </div>
        <div class="collect">
            <p>As a member you’ll collect Diamonds on almost everything you buy 
            and those Diamonds add up to (your really favorite) Rewards.</p>
            <h3><b-icon icon="gem" font-scale="1.5"></b-icon> Collect 1 Diamonds per 25 Baht</h3>
            <h3><b-iconstack font-scale="1.5">
                <b-icon stacked icon="gem" style="color: #faac77;" scale="0.75" shift-h="-8" shift-v="-8"></b-icon>
                <b-icon stacked icon="gem" style="color: #df6747;" ></b-icon>
                </b-iconstack>Double-Diamonds </h3>
            <p>For the first day of every month.<b-icon icon="calendar-check" font-scale="1.5"></b-icon></p>

            <h3><b-icon icon="cup-straw" font-scale="1.5"></b-icon>Get your favorite drink for free</h3>
            <p>Celebrate with a birthday treat <br> or use 50 Diamonds</p>

            <h3><b-icon icon="hand-thumbs-up" font-scale="1.5"></b-icon>1 Diamond 1 baht discount</h3>
            <p>Diamonds can be used instead of cash.</p>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.rewards{
    color: #737f8b;
    .head{
        display: flex;
        img{
            width: 700px;
        }
        .inhead{
            padding-top: 150px;
            padding-left: 100px;
            color: rgb(116, 85, 66);
            letter-spacing: 3px;
            h1{
                border-bottom: 2px solid rgb(146, 122, 106);
                padding: 20px;
                font-weight: bold;
            }
        }
    }
}

.getting{
    h2{
        border-bottom: 2px solid gray;
        margin: 0 40px 10px 40px;
        padding: 50px 0 20px 0;
        letter-spacing: 3px;
        font-weight: bold;
    }
    p{
        font-size: 1.2rem;
        letter-spacing: 3px;
    }
    .ingetting{
        display: flex;
        margin: 40px 30px 0 30px;
        p{
            padding: 0 80px 30px 80px;
            text-align: center;
        }
    }
}

.collect{
    p{
        margin: 0 0 40px 0;
    }
    h3{
        margin: 40px 0 0 0;
    }
    margin: 20px;
    font-size: 1.3em;
}

</style>
