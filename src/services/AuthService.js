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
        //ใช้สำหรับเข้าถึง api ตาม role ex. user,addmin -> delete,add data
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
        // call api post/auth/local
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
                //console.log(res.data)
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
                //console.log(e.response.data.message[0].messages[0].message)
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
        console.log(this.jwt);
        let header = this.getApiHeader()
        console.log(header);
        //let id = this.user.id
        let id = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        console.log(id);
        let res = await Axios.get(api_endpoint + "/users/"+id , header)
        if(money > 0)
        {
            res.data.money += parseInt(money)
            let update = await Axios.put(api_endpoint + "/users/" + res.data.id ,res.data ,header)
            return {status: "success" , message : "ขอบคุณที่เติมเงิน" , res : update}
        }
        else
        {
            return {status : "error" , message : "เงินติดลบอยู่อะ ดูดีๆ"}
        }
    },

    async redeem(item)
    {
        let header = this.getApiHeader()
        console.log(header);
        let idUser = JSON.parse(localStorage.getItem('auth_cafe')).user.id
        console.log("id" ,item.id);
        console.log(typeof idUser);
        let res = await Axios.get(api_endpoint + "/rewards/"+item.id , header)
        let me = await Axios.get(api_endpoint + "/users/"+idUser , header)

        console.log("res" ,res);
        console.log("userDiamond", me.data.diamond_point)
        // console.log("resDiamond" ,res.data.diamonds);
        // console.log("userNAME", me.data.id)
        // console.log("REWard" ,res.data.diamonds);
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
            console.log("body ",body);
            
            //console.log("2",eiei);
            let updateStock = await Axios.put(api_endpoint + "/rewards/"+res.data.id , res.data , header)
            let updatePoint = await Axios.put(api_endpoint + "/users/"+me.data.id , me.data , header)
            await Axios.post(url , body , header)
            return {status: "success" , message : "แลกของสำเร็จ" , res : updateStock , me : updatePoint}
            
        }
        else{
            console.log("shit555");
            return {status : "error" , message : "แลกไม่ได้"}
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