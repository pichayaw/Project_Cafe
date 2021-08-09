import Axios from "axios"
const auth_key = "auth_cafe"
let auth = JSON.parse(localStorage.getItem(auth_key))
const user = auth ? auth.user : ""
const api_endpoint = process.env.VUE_APP_PROJECT_CAFE_ENDPOINT || "http://localhost:1337"

export default
{
    isAuthen()
    {
        return (user !== "") && (jwt !== "")
    },
    
    getUser ()
    {
        return user
    },

    getJwt ()
    {
        return JSON.parse(localStorage.getItem('auth_cafe')).jwt
    },

    getApiHeader()
    {
        let jwt = JSON.parse(localStorage.getItem('auth_cafe')).jwt
        if (jwt !== ''){
            return{
                headers:{
                    Authorization:"Bearer " + jwt
                }
            }
        }
    },

    async login ({email , password})
    {
        try{
            let url = api_endpoint + "/auth/local" 
            let body = {
                identifier: email ,
                password: password
            }
            console.log(1)
            let res = await Axios.post(url , body)
            console.log(2)
            if (res.status === 200)
            {
                localStorage.setItem(auth_key , JSON.stringify(res.data))
                this.jwt = res.data.jwt
                return {
                    success : true ,
                    user : res.data.user,
                    jwt : res.data.jwt

                }
            }
            else
            {
                console.log("NOT 200" , res)   
            }
            
        } catch(e){
            if (e.response.status === 400){
            
                return{
                    success : false ,
                    message : e.response.data.message[0].messages[0].message
                }
            }
            
            
        }
    }, 

    async register({username , email , password})
    {
        try{
            console.log(3)
            let url = `${api_endpoint}/auth/local/register`
            let body ={
                username: username,
                email: email,
                password: password
            }
            let res = await Axios.post(url, body)
            console.log(4)
            if (res.status == 200){
                localStorage.setItem(auth_key , JSON.stringify(res.data))
                return {
                    success : true ,
                    user : res.data.user,
                    jwt : res.data.jwt
                }
            }
            else{
                console.log("NOT 200" , res)   
            }
        }catch(e){
            if (e.response.status === 400){
                return{
                    success : false ,
                    message : e.response.data.message[0].messages[0].message
                }
            }
            else{
                return{
                    success: false,
                    message: "Unknow error: " + e.response.data
                }
            }

        }
    },

    logout()
    {
        localStorage.removeItem(auth_key)
    },

    async topup(money)
    {
        let header = this.getApiHeader()
        let id = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        let res = await Axios.get(api_endpoint + "/users/"+id , header)
        if(money > 0)
        {
            res.data.money += parseInt(money)
            let update = await Axios.put(api_endpoint + "/users/" + res.data.id ,res.data ,header)
            return {status: "success" , message : "Thank for topping up." , res : update}
        }
        else
        {
            return {status : "error" , message : "Negative balance"}
        }
    },

    async redeem(item)
    {
        let header = this.getApiHeader()
        let idUser = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        let res = await Axios.get(api_endpoint + "/rewards/"+item.id , header)
        let me = await Axios.get(api_endpoint + "/users/"+idUser , header)
        if (me.data.diamond_point >= res.data.diamonds && res.data.Stock > 0)
        {
            res.data.Stock -= 1
            me.data.diamond_point -= res.data.diamonds 
            let url = `${api_endpoint}/reward-histories`
            let body ={
               users: me.data ,
               reward: res.data ,
               reward_point: res.data.diamonds
            }
            let updateStock = await Axios.put(api_endpoint + "/rewards/"+res.data.id , res.data , header)
            let updatePoint = await Axios.put(api_endpoint + "/users/"+me.data.id , me.data , header)
            await Axios.post(url , body , header)
            return {status: "success" , message : "Redeemed" , res : updateStock , me : updatePoint}
            
        }
        else{
            return {status : "error" , message : "Can not redeem"}
        }
        
    },


    async buyHot(water)
    {
        let header = this.getApiHeader()
        let idUser = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        let res = await Axios.get(api_endpoint + "/beverages/"+water.id , header)
        let me = await Axios.get(api_endpoint + "/users/"+idUser , header)

        if (me.data.money >= res.data.hot_style)
        {
            me.data.money -= res.data.hot_style 
            me.data.diamond_point += Math.floor(res.data.hot_style  / 20)
            let url = `${api_endpoint}/product-histories`
            let body ={
               user: me.data ,
               beverage: res.data ,
               diamond_point: Math.floor(res.data.hot_style / 20),
               price : res.data.hot_style ,
               type :  "hot style "
            }
            console.log("body ",body);

            let updateMoney = await Axios.put(api_endpoint + "/users/"+me.data.id , me.data , header)
            await Axios.post(url , body , header)
            return {status: "success" , message : "Purchased"  , me : updateMoney}

        }
        else{
            return {status : "error" , message : "Can not redeem"}
        }
        
    },

    async buyIce(water)
    {
        let header = this.getApiHeader()
        let idUser = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        let res = await Axios.get(api_endpoint + "/beverages/"+water.id , header)
        let me = await Axios.get(api_endpoint + "/users/"+idUser , header)

        if (me.data.money >= res.data.ice_style)
        {
            me.data.money -= res.data.ice_style
            me.data.diamond_point += Math.floor(res.data.ice_style / 20)
            let url = `${api_endpoint}/product-histories`
            let body ={
               user: me.data ,
               beverage: res.data ,
               diamond_point: Math.floor(res.data.ice_style / 20) ,
               price : res.data.ice_style ,
               type :  "ice style"
            }
            console.log("body ",body);
            let updateMoney = await Axios.put(api_endpoint + "/users/"+me.data.id , me.data , header)
            await Axios.post(url , body , header)
            return {status: "success" , message : "Purchased"  , me : updateMoney}

        }
        else{
            console.log("shit555");
            return {status : "error" , message : "Can not redeem"}
        }
        
    },

    async buyBlended(water)
    {
        let header = this.getApiHeader()
        let idUser = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        let res = await Axios.get(api_endpoint + "/beverages/"+water.id , header)
        let me = await Axios.get(api_endpoint + "/users/"+idUser , header)

        if (me.data.money >= res.data.blended_style)
        {
            me.data.money -= res.data.blended_style
            me.data.diamond_point += Math.floor(res.data.blended_style / 20)
            let url = `${api_endpoint}/product-histories`
            let body ={
               user: me.data ,
               beverage: res.data ,
               diamond_point: Math.floor(res.data.blended_style / 20) ,
               price : res.data.blended_style,
               type :  "blended style"
            }
            console.log("body ",body);

            let updateMoney = await Axios.put(api_endpoint + "/users/"+me.data.id , me.data , header)
            await Axios.post(url , body , header)
            return {status: "success" , message : "Purchased"  , me : updateMoney}

        }
        else{
            console.log("shit555");
            return {status : "error" , message : "Can not redeem"}
        }
        
    },

    async buyFood(kao)
    {
        let header = this.getApiHeader()
        let idUser = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        let res = await Axios.get(api_endpoint + "/foods/"+kao.id , header)
        let me = await Axios.get(api_endpoint + "/users/"+idUser , header)

        if (me.data.money >= res.data.price)
        {
            me.data.money -= res.data.price
            me.data.diamond_point += Math.floor(res.data.price / 20)
            let url = `${api_endpoint}/product-histories`
            let body ={
               user: me.data ,
               food: res.data ,
               diamond_point: Math.floor(res.data.price / 20) ,
               price : res.data.price, 
               type : "-"
               
            }
            console.log("body ",body);
            
            let updateMoney = await Axios.put(api_endpoint + "/users/"+me.data.id , me.data , header)
            await Axios.post(url , body , header)
            return {status: "success" , message : "Purchased"  , me : updateMoney}

        }
        else{
            console.log("shit555");
            return {status : "error" , message : "Can not redeem"}
        }
        
    },



    async refresh()
    {
        let header = this.getApiHeader()
        let res = await Axios.get(api_endpoint + "/users/"+user.id , header)
        return res.data
    },

    async buyHistory()
    {
        let header = this.getApiHeader()
        let res = await Axios.get(api_endpoint + "/users/"+user.id , header)
        return res.data
    }



    
}