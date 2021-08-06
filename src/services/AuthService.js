import Axios from 'axios' 

const auth_key = "auth_cafe"
let auth = JSON.parse(localStorage.getItem(auth_key))
const jwt = auth ? auth.jwt : ""
const user = auth ? auth.user : ""
const api_endpoint = process.env.VUE_APP_PROJECT_CAFE_ENDPOINT || "http://localhost:1337"

export default
{
    isAuthen()
    {
        return (user !== "") && (jwt !== "")
    },
    getApiHeader() {
        let jwt = JSON.parse(localStorage.getItem('auth_cafe')).jwt
        console.log("this" + jwt);
        if (this.jwt !== "") {
          console.log(2);
            return {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          };
        }
      },
    getUser ()
    {
        return user
    },

    getJwt ()
    {
        return jwt
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
            let res = await Axios.post(url , body)
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

    async register({username , email , password} 
        , {birthday , birthmonth , birthyear})
    {

    },

    logout()
    {
        localStorage.removeItem(auth_key)
    },

    async topup(money)
    {
        //console.log(this.jwt);
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

    async refresh()
    {
        let header = this.getApiHeader()
        let res = await Axios.get(api_endpoint + "/users/me" , header)
        return res.data
    },

    async buyHistory()
    {
        let header = this.getApiHeader()
        
        let res = await Axios.get(api_endpoint + "/users/me" , header)
        return res.data
    }



    
}